import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then( response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => {
          return teacher.id;
        });
        
        setFavorites(favoritedTeachersIds);
      }
    }); 
  });

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>  
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}> Máteria </Text>
            <TextInput 
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}> Dia da semana </Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}> Horário </Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      
      <View style={styles.textWarningWrapper}>
        {teachers.length === 0 ? (
          <Text style={styles.textWarning}>
            Pressione <Feather name="filter" size={20} color="#9c9c9c"/>{' '}
            para encontrar seu Proffy ideal.
          </Text>
        ) : null}
      </View>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher}
                favorited={favorites.includes(teacher.id)}
              />
            );
          })
        }
      </ScrollView>

    </View>
  );
}

export default TeacherList;