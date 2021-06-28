import React from 'react';

import {Container, Text, Avatar, SubmitButton} from './styles';

import foto from '../../assets/Foto.jpg';

const Main = ({navigation}) => {
  return (
    <Container>
      <Text>Arnaldo Rogério Regatieri Junior</Text>
      <Avatar source={foto} />
      <SubmitButton onPress={() => navigation.navigate('Alunos')}>
        Alunos
      </SubmitButton>
      <SubmitButton onPress={() => navigation.navigate('Professores')}>
        Professores
      </SubmitButton>
      <SubmitButton onPress={() => navigation.navigate('Cursos')}>
        Cursos
      </SubmitButton>
    </Container>
  );
};

export default Main;