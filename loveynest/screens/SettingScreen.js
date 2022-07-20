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

      <View style={{ height: 50, top: -40}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingHorizontal: 20,
          }}
        >
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
              Johnnnn
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
              Selenaaaa
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          
        }}
      >
        <TouchableOpacity style={[style.btn, { marginTop: 75 }]}>
          <Ionicons
            name="logo-instagram"
            color={COLORS.dark}
            size={40}
            style={style.icon}
          />
          <Text style={style.fontSetting}>Follow us on Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons
            name="logo-facebook"
            color={COLORS.dark}
            size={40}
            style={style.icon}
          />
          <Text style={style.fontSetting}>Follow us on Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons
            name="heart-dislike-circle-outline"
            color={COLORS.dark}
            size={40}
            style={style.icon}
          />
          <Text style={style.fontSetting}>Unpaired with Partner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons
            name="log-out-outline"
            color={COLORS.dark}
            size={40}
            style={style.icon}
          />
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
    borderRadius: 70,
    // position: "absolute",
    borderColor: "#FFF",
    borderWidth: 3.5,
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 70,
    // position: "absolute",
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
