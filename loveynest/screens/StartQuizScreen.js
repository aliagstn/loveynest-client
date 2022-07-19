import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const windowHeight = Dimensions.get("window").height;
export default function StartQuizScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        flexDirection: "column",
      }}
    >
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
        <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
      </TouchableOpacity>

      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 10,
          marginTop: 100,
          flex: 2,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View style={{ marginTop: 30 }}>
          <Text style={style.title}>Hello couples!</Text>
          <Text
            style={{
              fontSize: windowHeight <= 750 ? 16 : 20,
              color: "#334155",
              lineHeight: 30,
              marginTop: 10,
            }}
          >
            This is a quiz for you that we hope can be filled once a week to
            find out the progress of your relationship.
          </Text>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text
              style={{
                fontSize: windowHeight <= 750 ? 25 : 34,
                color: "#334155",
                paddingTop: 10,
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                flex: 1,
                paddingLeft: 15,
                paddingTop: 10,
                fontSize: windowHeight <= 750 ? 16 : 20,
                color: "#334155",
              }}
            >
              Please be honest with your feelings in answering this quiz.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text
              style={{
                fontSize: windowHeight <= 750 ? 25 : 34,
                color: "#334155",
                paddingTop: 10,
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                flex: 1,
                paddingLeft: 15,
                paddingTop: 10,
                fontSize: windowHeight <= 750 ? 16 : 20,
                color: "#334155",
              }}
            >
              After answering you can see your partner's answer for self-reflection.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text
              style={{
                fontSize: windowHeight <= 750 ? 25 : 34,
                color: "#334155",
                paddingTop: 10,
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                flex: 1,
                paddingLeft: 15,
                paddingTop: 10,
                fontSize: windowHeight <= 750 ? 16 : 20,
                color: "#334155",
              }}
            >
              Don't be offended, and keep in touch with your partner.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text
              style={{
                fontSize: windowHeight <= 750 ? 25 : 34,
                color: "#334155",
                paddingTop: 10,
              }}
            >
              {"\u2022"}
            </Text>
            <Text
              style={{
                flex: 1,
                paddingLeft: 15,
                paddingTop: 10,
                fontSize: windowHeight <= 750 ? 16 : 20,
                color: "#334155",
              }}
            >
              Do it once a week to know the progress of your relationship.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => navigation.navigate("TestQuizScreen")}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Take quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
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
  title: {
    fontSize: windowHeight <= 750 ? 25 : 32,
    fontWeight: "bold",
    color: "#334155",
  },
  underTitle: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#94a3b8",
  },
  inputContainer: {
    marginTop: 25,
    height: 60,
    backgroundColor: "#F7F8F9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnLogin: {
    height: 60,
    backgroundColor: "#384BCB",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
