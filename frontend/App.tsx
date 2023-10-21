import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/screens/home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./src/screens/LoginPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "./src/screens/SettingsPage";

const stack = createStackNavigator();

const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Login" component={LoginPage} />
    </stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <bottom_tab.Navigator>
          <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen}/>
          <bottom_tab.Screen name="Settings" component={SettingsPage}/>
        </bottom_tab.Navigator>
        {/* <stack.Navigator>
          <stack.Screen name="Home" component={Home}/>
          <stack.Screen name="Login" component={LoginPage}/>
          <stack.Screen name="Settings" component={SettingsPage}/>
        </stack.Navigator> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
