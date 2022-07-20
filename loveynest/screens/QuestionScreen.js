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
export default function QuestionScreen({ navigation }) {
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
          onPress={() => navigation.navigate("MyQuestion")}
          style={{ marginHorizontal: 20, marginTop: 150 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
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
                My Questions
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("QuestionFromPartner")}
          style={{ marginHorizontal: 20, marginTop: 30 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          >
            <View style={style.uploadBtn}>
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
