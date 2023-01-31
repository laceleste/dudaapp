import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "../screens/Task";
import NewTask from "../screens/NewTask";
import Details from "../screens/Details";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Task" component={Task} options={{ headerTintColor: "#F92E6A"}}/>
        <Stack.Screen name="New Task" component={NewTask} options={{ headerTintColor: "#F92E6A"}}/>
        <Stack.Screen name="Details" component={Details} options={{ headerTintColor: "#F92E6A"}}/>
      </Stack.Navigator>

  );
}

export default StackNavigator;
