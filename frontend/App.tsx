import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/screens/home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./src/screens/LoginPage";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home}/>
          <stack.Screen name="Login" component={LoginPage}/>
        </stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
