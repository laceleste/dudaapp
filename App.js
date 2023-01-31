import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./navigation/DrawerNavigator";
import Task from './screens/Task';

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Task" component={Task} />
    <Stack.Screen name="Dashboard" component={DrawerNavigator} />
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}

