import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Main from './src/screens/Main';
//import Test from './src/screens/Test';
import About from './src/screens/FemaleRegistration';
//import TestData from './src/screens/TestData';
//import TestNew from './src/screens/TestNew';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
