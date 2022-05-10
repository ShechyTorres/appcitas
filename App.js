import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable
} from 'react-native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const App = () => {

  const nuevaCitaHandler = () => {
    console.log('Diste click...')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable 
        onPress={ nuevaCitaHandler }
        style={styles.btnNuevaCita}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >Nueva Cita</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 25,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
  },
  btnTextoNuevaCita: {
    textAlign: 'center'
  }
})

export default App;
