import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const message = `Olá ${teacher.name}, 
    encontrei o seu perfil no Proffy e gostaria de mais detalhes sobre as
    aulas de ${teacher.subject}`;

  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Júlia Stefanoni"/>
        <div>
          <strong> {teacher.name} </strong>
          <span> {teacher.subject} </span>
        </div>
      </header>
    
      <p> {teacher.bio} </p>
      
      <footer>
        <p>
          Preço/hora
          <strong> 
            {new Intl.NumberFormat('pt-BR', 
              { 
                style: 'currency',
                currency: 'BRL' 
              }).format(teacher.cost)
            }
          </strong>
        </p>
        <a 
          href={`https://wa.me/${teacher.whatsapp}?text=${message}`} 
          onClick={createNewConnection} 
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
    );
  }
  
  export default TeacherItem;