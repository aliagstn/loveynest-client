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
export default function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/setting.png")}
      ></ImageBackground>
      <Image
        style={style.image}
        source={require("../assets/pp.jpg")}
        resizeMode="contain"
      />
      <Image
        style={style.image2}
        source={require("../assets/pp2.jpg")}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 2,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginTop: 70,
              marginLeft: 80,
              fontSize: 22,
              fontWeight: "700",
              color: COLORS.dark,
            }}
          >
            John
          </Text>
          <Text
            style={{
              marginTop: 70,
              marginRight: 80,
              fontSize: 22,
              fontWeight: "700",
              color: COLORS.dark,
            }}
          >
            Selena
          </Text>
        </View>

        <TouchableOpacity style={[style.btn, { marginTop: 35 }]}>
          <Ionicons name="logo-instagram" color={COLORS.dark} size={40} style={style.icon} />
          <Text style={style.fontSetting}>Follow us on Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons name="logo-facebook" color={COLORS.dark} size={40} style={style.icon} />
          <Text style={style.fontSetting}>Follow us on Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons name="heart-dislike-circle-outline" color={COLORS.dark} size={40} style={style.icon} />
          <Text style={style.fontSetting}>Unpaired with Partner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons name="log-out-outline" color={COLORS.dark} size={40} style={style.icon} />
          <Text style={style.fontSetting}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: 210,
    marginLeft: 65,
    borderRadius: 70,
    position: "absolute",
    borderColor: "#FFF",
    borderWidth: 3.5,
  },
  image2: {
    width: 100,
    height: 100,
    marginTop: 210,
    marginLeft: 225,
    borderRadius: 70,
    position: "absolute",
    borderColor: "#FFF",
    borderWidth: 3.5,
  },
  imageDan: {
    width: 40,
    height: 40,
    marginTop: 230,
    marginLeft: 175,
    borderRadius: 70,
    position: "absolute",
    borderColor: "#FFF",
    borderWidth: 1.5,
    backgroundColor: "#FFF",
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
    marginHorizontal: 20
  }
});
