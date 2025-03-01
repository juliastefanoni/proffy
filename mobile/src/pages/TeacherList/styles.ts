import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width:'48%'
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent:'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  },

  textWarningWrapper: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    paddingVertical: 250
  },

  textWarning: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    color: '#9c9c9c'
  }
});

export default styles;