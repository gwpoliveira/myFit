import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider} from "native-base";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
// import LoginScreen from './pages/LoginScreen';
// import MainScreen from './pages/MainScreen';
// import WalkScreen from './pages/WalkScreen';
// import RaceScreen from './pages/RaceScreen';
// import CyclingScreen from './pages/CyclingScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          {/*<Stack.Screen name="Login" component={LoginScreen} />*/}
          {/*<Stack.Screen name="Main" component={MainScreen} />*/}
          {/*<Stack.Screen name="Walk" component={WalkScreen} />*/}
          {/*<Stack.Screen name="Race" component={RaceScreen} />*/}
          {/*<Stack.Screen name="Cycling" component={CyclingScreen} />*/}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
