import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './src/screen/ListScreen';
import DetailScreen from './src/screen/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{title: 'List Screen'}}
        />
        <Stack.Screen name="DetailScreen"   options={{title: 'Detail Screen'}} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
