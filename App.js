import { StyleSheet, Text, View, SafeAreaProvider } from 'react-native'
import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomMenu from './src/navigators/BottomMenu'
import Chart from './src/screens/Chart'


const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomMenu"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="BottomMenu" component={BottomMenu} />
          <Stack.Screen name="Chart" component={Chart} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})