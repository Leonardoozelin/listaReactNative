import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Main from './pages/Main';
import Alunos from './pages/Alunos';
import Professores from './pages/Professores';
import Cursos from './pages/Cursos';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        inicialRouteName="Home"
        screenOptions={{
          gestureEnebled: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen
          name="Alunos"
          component={Alunos}
          options={{ title: 'Alunos' }}
        />
        <Stack.Screen
          name="Professores"
          component={Professores}
          options={{ title: 'Professores' }}
        />
        <Stack.Screen
          name="Cursos"
          component={Cursos}
          options={{ title: 'Cursos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;