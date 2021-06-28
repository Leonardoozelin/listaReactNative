import React, { useState, useEffect } from 'react';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native';
import api from '../../services/api';

const Alunos = () => {
    const [aluno, setAluno] = useState();

    useEffect(()=>{
        api.get('/Unifacef/Aluno')
            .then((response) => setAluno(response.data));
    }, []);
  
    return (
      <FlatList 
        data={aluno}
        renderItem={({item}) => 
          <List.Item
              title={item.nome}
              description={item.curso}
              right={props => <List.Icon {...props} icon="account-circle-outline" />}
            />
        }
      />
    );
  };

export default Alunos;