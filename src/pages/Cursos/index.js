import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import api from '../../services/api';


const Cursos = () => {
  const [cursos, setCursos] = useState();

  useEffect(()=>{
      api.get('/Unifacef/Curso')
          .then((response) => setCursos(response.data));
  }, []);

  return (
    <FlatList 
      data={cursos}
      renderItem={({item}) => 
        <List.Item
            title={item}
            right={props => <List.Icon {...props} icon="account-circle-outline" />}
          />
      }
    />
  );
};

export default Cursos;