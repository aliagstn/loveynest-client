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
export default function AnsweredScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView>
        <TouchableOpacity
          style={style.headerBtn}
          onPress={navigation.goBack}
        >
          <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AppQuizAnswered")}
          style={{ marginHorizontal: 20, marginTop: 120 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
            //  blurRadius={70}
          >
            <View style={style.uploadBtn}>
              <Text
                style={{
                  fontSize: 35,
                  padding: 30,
                  color: "white",
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                App Quiz
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserQuizAnswered")}
          style={{ marginHorizontal: 20, marginTop: 30 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://images.unsplash.com/photo-1564296786842-4fc88fb50485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
          >
            <View style={style.uploadBtn}>
              <Text
                style={{
                  fontSize: 23,
                  padding: 30,
                  paddingTop: 30,
                  color: "white",
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                Quiz Made by Couples
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
    height: 200,
    width: width / 1.12,
    borderRadius: 15,
    marginRight: 20,
    overflow: "hidden",
  },
  uploadBtn: {
    marginTop: 45,
    marginRight: 30,
    marginLeft: 25,
    height: 120,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtn: {
    marginTop: 40,
    position: "absolute",
    marginLeft: 15,
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d1d5db",
    borderStyle: "solid",
    borderWidth: 0.7,
  },
});
