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
import * as Clipboard from "expo-clipboard";

export default function InputCode({ navigation }) {
  const [copiedText, setCopiedText] = React.useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("DRF-C6F");
  };
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
          paddingTop: 20,
          marginTop: 100,
          flex: 1,
          marginBottom: 10,
        }}
      >
        <View>
          <Text style={style.title}>Share my code with my partner</Text>
        </View>
        <TextInput
          value="DRF-C6F"
          style={[style.inputContainer, { marginTop: 40, fontSize: 20 }]}
        />
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity style={style.btnLogin} onPress={copyToClipboard}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Copy my code
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 10,
          marginTop: 100,
          flex: 2,
          backgroundColor: "#E8ECF4",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View style={{ marginTop: 55 }}>
          <Text style={style.title}>Enter my partner’s code</Text>
        </View>
        <TextInput
          placeholder="Enter code"
          style={[style.inputContainer, { marginTop: 40, fontSize: 20 }]}
        />
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity style={style.btnLogin} onPress={() => navigation.navigate("TabNavigation")}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Pair with partner
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
    fontSize: 31,
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
