import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
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
import FormQuiz from "./screens/FormQuiz";
import AddQuestion from "./screens/AddQuestion";
import AddQuestion3 from "./screens/AddQuestion3";
import AddQuestion4 from "./screens/AddQuestion4";
import AddQuestion5 from "./screens/AddQuestion5";
import MyQuestion from "./screens/MyQuestion";
import QuestionFromPartner from "./screens/QuestionFromPartner";
import AppQuizAnswered from "./screens/AppQuizAnswered";
import UserQuizAnswered from "./screens/UserQuizAnswered";
import DetailAnswerUser from "./screens/DetailAnswerUser";
// import Styling from "./screens/Styling";
import SettingScreen from "./screens/SettingScreen";
import { Provider } from "react-redux";
import store from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() =>{
    getToken()
  },[])
  const getToken = async () =>{
    try {
      let access_token = await AsyncStorage.getItem("access_token")
      if(access_token){
        setIsSignedIn(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen
                name="InputNameScreen"
                component={InputNameScreen}
              />
              <Stack.Screen
                name="UploadPhotoProfile"
                component={UploadPhotoProfile}
              />
              <Stack.Screen name="InputCode" component={InputCode} />
            </>
          )}
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
          <Stack.Screen name="StartQuizScreen" component={StartQuizScreen} />
          <Stack.Screen name="TestQuizScreen" component={TestQuizScreen} />
          <Stack.Screen
            name="TestQuestionScreen"
            component={TestQuestionScreen}
          />
          <Stack.Screen name="AnsweredScreen" component={AnsweredScreen} />
          <Stack.Screen name="FormQuiz" component={FormQuiz} />
          <Stack.Screen name="AddQuestion" component={AddQuestion} />
          <Stack.Screen name="AddQuestion3" component={AddQuestion3} />
          <Stack.Screen name="AddQuestion4" component={AddQuestion4} />
          <Stack.Screen name="AddQuestion5" component={AddQuestion5} />
          <Stack.Screen name="MyQuestion" component={MyQuestion} />
          <Stack.Screen
            name="QuestionFromPartner"
            component={QuestionFromPartner}
          />
          <Stack.Screen name="AppQuizAnswered" component={AppQuizAnswered} />
          <Stack.Screen name="UserQuizAnswered" component={UserQuizAnswered} />
          <Stack.Screen name="DetailAnswerUser" component={DetailAnswerUser} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
