import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { userLoggedInSuccess } from "../store/actions/userAction";

export default function InputNameScreen({ navigation, route }) {
  const {id} = route.params
  const dispatch = useDispatch()
  const [nickname, setNickname] = useState("")
  const userData = useSelector((state) => state.user.user)

  const inputNickname = async () => {
    try {
      userData.nickname = nickname
      dispatch(userLoggedInSuccess(userData))
      navigation.navigate("UploadPhotoProfile", {nickname, id})      
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
        <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, marginTop: 125 }}>
        <View>
          <Text style={style.title}>What’s your nick name?</Text>
        </View>
        <View>
          <Text style={style.underTitle}>
            We’ll use this to tell your partner it’s you
          </Text>
        </View>
        <TextInput
          placeholder="Enter your nick name"
          style={[
            style.inputContainer,
            { marginTop: 40, fontSize: 16 },
          ]}
          onChangeText={setNickname}
        />
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={inputNickname}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Continue
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
