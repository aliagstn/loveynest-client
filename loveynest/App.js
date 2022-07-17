import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardScreen from "./screens/OnBoardScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import InputNameScreen from "./screens/InputNameScreen";
import UploadPhotoProfile from "./screens/UploadPhotoProfile";
import InputCode from "./screens/InputCode";
import TabNavigation from "./screens/TabNavigation";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="InputNameScreen" component={InputNameScreen} />
          <Stack.Screen
            name="UploadPhotoProfile"
            component={UploadPhotoProfile}
          />
          <Stack.Screen name="InputCode" component={InputCode} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
