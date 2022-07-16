import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

export default function OnBoardScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color={"#475569"}
          onPress={navigation.goBack}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, marginTop: 125 }}>
        <View>
          <Text style={style.title}>Welcome back! Glad to see you, Again!</Text>
        </View>
        <View style={[style.inputContainer, { marginTop: 40 }]}>
          <TextInput
            placeholder="Enter your email"
            style={{ marginLeft: 8, fontSize: 16 }}
          />
        </View>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Enter your password"
            style={{ marginLeft: 8, fontSize: 16 }}
          />
        </View>
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => navigation.navigate("InputNameScreen")}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={style.footerContainer}
      >
        <Text style={style.footer}>
          Don’t have an account? <Text style={style.regis} onPress={() => navigation.navigate("RegisterScreen")}>Register Now</Text>{" "}
        </Text>
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
    fontSize: 31,
    fontWeight: "bold",
    color: "#334155",
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
  footerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 35,
  },
  footer: {
    fontSize: 16,
    color: "#334155",
  },
  regis: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#384BCB",
  },
});
