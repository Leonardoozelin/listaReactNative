import React, { useState, useEffect } from 'react';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native';
import api from '../../services/api';


const Professores = () => {
    const [professor, setProfessor] = useState();

    useEffect(()=>{
        api.get('/Unifacef/Professor')
            .then((response) => setProfessor(response.data));
    }, []);
  
    return (
      <FlatList 
        data={professor}
        renderItem={({item}) => 
          <List.Item
              title={item}
              right={props => <List.Icon {...props} icon="account-circle-outline" />}
            />
        }
      />
    );
  };

export default Professores;