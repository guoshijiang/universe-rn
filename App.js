import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Route from './app/route';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <NavigationContainer>
      <Route />
      <Toast position="bottom" bottomOffset={40} />
    </NavigationContainer>
  );
}

export default App;
