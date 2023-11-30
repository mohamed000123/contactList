import 'react-native-gesture-handler';
import React from 'react';
import ContactStack from './app/modules/view/RouterConfig';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <ContactStack />
    </NavigationContainer>
  );
};

export default App;
