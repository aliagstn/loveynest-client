import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import COLORS from "../consts/colors";
import { StatusBar } from "expo-status-bar";

export default function OnBoardScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Image
        source={require("../assets/images.png")}
        style={style.image}
        resizeMode={"cover"}
      />
      <View style={{ paddingHorizontal: 20, paddingTop: 20, marginTop: 20 }}>
        <View>
          <Text style={style.title}>Loveynest</Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <View>
            <Text style={style.textStyle}>
              With Loveynest, build, protect, and reinforce your love nest.
              Loveynest helps partners around the world deepen their intimacy
              and build a happier relationship.
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
        <TouchableOpacity
          style={style.btnLogin}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: "600", }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.btnRegister, { marginTop: 10 }]}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={{ color: COLORS.black, fontSize: 16, fontWeight: "600", }}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  red: {
    backgroundColor: "red",
    alignItems: "center",
    padding: 10,
  },
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4b5563",
  },
  textStyle: {
    fontSize: 16,
    color: "#9ca3af",
  },
  btnLogin: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "#384BCB",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnRegister: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.black,
    borderStyle: "solid",
    borderWidth: 0.7,
  },
});
