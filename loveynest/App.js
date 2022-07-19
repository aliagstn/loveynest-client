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
import ChatScreen from "./screens/ChatScreen";
import TabNavigation from "./screens/TabNavigation";
import HomeScreen from "./screens/HomeScreen";
import QuestionScreen from "./screens/QuestionScreen";
import TestQuizScreen from "./screens/TestQuizScreen";
import StartQuizScreen from "./screens/StartQuizScreen";
import TestQuestionScreen from "./screens/TestQuestionScreen";
import AnsweredScreen from "./screens/AnsweredScreen";
import { Provider } from "react-redux";
import store from "./store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
          <Stack.Screen name="StartQuizScreen" component={StartQuizScreen} />
          <Stack.Screen name="TestQuizScreen" component={TestQuizScreen} />
          <Stack.Screen name="TestQuestionScreen" component={TestQuestionScreen} />
          <Stack.Screen name="AnsweredScreen" component={AnsweredScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
