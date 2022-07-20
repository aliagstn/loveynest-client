import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";

import COLORS from "../consts/colors";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width } = Dimensions.get("screen");
export default function QuizScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("StartQuizScreen")}
          style={{ marginHorizontal: 20, marginTop: 50 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://cdn.dribbble.com/users/1609395/screenshots/14534847/media/b5ff34a4925a9d1d39b9055e9e684a39.jpg?compress=1&resize=768x576&vertical=top",
            }}
          >
            <View
              style={style.uploadBtn}
              onPress={() => navigation.navigate("StartQuizScreen")}
            >
              <Text
                style={{
                  fontSize: 35,
                  padding: 30,
                  color: "white",
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                Quizzes
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("QuestionScreen")}
          style={{ marginHorizontal: 20, marginTop: 30 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://cdn.dribbble.com/users/2920041/screenshots/6973567/media/99a1d9ad5287bb691eafa9ae9de924b1.jpg?compress=1&resize=768x576&vertical=top",
            }}
          >
            <View
              style={style.uploadBtn}
              onPress={() => navigation.navigate("QuestionScreen")}
            >
              <Text
                style={{
                  fontSize: 35,
                  padding: 30,
                  paddingTop: 30,
                  color: "white",
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                Questions
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AnsweredScreen")}
          style={{ marginHorizontal: 20, marginTop: 30 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://cdn.dribbble.com/users/2178433/screenshots/4351552/media/cb3c4b33771d8ee3e7f1894df47ca980.jpg?compress=1&resize=768x576&vertical=top",
            }}
          >
            <View
              style={style.uploadBtn}
              onPress={() => navigation.navigate("AnsweredScreen")}
            >
              <Text
                style={{
                  fontSize: 35,
                  padding: 30,
                  paddingTop: 30,
                  color: "white",
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                Answered
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  cardQuiz: {
    height: 180,
    width: width / 1.12,
    borderRadius: 15,
    marginRight: 20,
    overflow: "hidden",
  },
  uploadBtn: {
    marginTop: 25,
    marginRight: 30,
    marginLeft: 25,
    height: 120,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
