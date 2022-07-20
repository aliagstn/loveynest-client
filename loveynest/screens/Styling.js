import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

export default function Styling({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{flexDirection: "row", justifyContent: 'space-around', paddingHorizontal: 20}}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            style={style.image}
            source={require("../assets/pp.jpg")}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: COLORS.dark,
            }}
          >
            A
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            style={style.image}
            source={require("../assets/pp2.jpg")}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: COLORS.dark,
            }}
          >
            A
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    // marginTop: 210,
    // marginLeft: 65,
    borderRadius: 70,
    // position: "absolute",
    borderColor: "#FFF",
    borderWidth: 3.5,
  },
  image2: {
    width: 100,
    height: 100,
    // marginTop: 210,
    // marginLeft: 225,
    borderRadius: 70,
    position: "absolute",
    borderColor: "#FFF",
    borderWidth: 3.5,
  },
  btn: {
    backgroundColor: "#F7F8F9",
    height: 70,
    width: 355,
    borderRadius: 10,
    marginLeft: 18,
    marginTop: 15,
    flexDirection: "row",
  },
  fontSetting: {
    fontSize: 20,
    color: COLORS.dark,
    marginVertical: 18,
  },
  icon: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
