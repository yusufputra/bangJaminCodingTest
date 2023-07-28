/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/page/Home';
import {Login} from './src/page/Login';
import {Pin} from './src/page/Pin';
import {Main} from './src/page/Main';
import {Nasabah} from './src/page/Nasabah';

export type RootStackParamList = {
  home: undefined;
  login: undefined;
  pin: {
    email: string;
  };
  main: undefined;
  nasabah: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="pin" component={Pin} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="nasabah" component={Nasabah} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
