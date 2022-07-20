import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/userAction";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnBoardScreen({ navigation }) {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const logginIn = () => {
    dispatch(login({email, password}))
      .then((data) => {
        // console.log(id)
        // console.log(userData, "<<< dari use selector")
        storeData(data)
        const id = data.id
        console.log(data)
        if(!data.nickname){
          navigation.navigate("InputNameScreen", {id})
        }else if(!data.photoProfile){
          const nickname = data.nickname
          navigation.navigate("UploadPhotoProfile", {nickname, id})
        }else{
          navigation.navigate("InputCode", {id})
        }
      })
      .catch((err) => {
        console.log(err)
        Alert.alert(
          "Error Invalid Input",
          "Please input a valid email and password ♡",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      })
  }
  const storeData = async (dataToStore) => {
    try {
      await AsyncStorage.setItem('access_token', JSON.stringify(dataToStore.access_token))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color={"#475569"}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, marginTop: 125 }}>
        <View>
          <Text style={style.title}>Welcome back! Glad to see you, Again!</Text>
        </View>
        <TextInput
            placeholder="Enter your email"
            style={[style.inputContainer, { marginTop: 40, fontSize: 16 }]}
            onChangeText={setEmail}
          />
          <TextInput
          secureTextEntry={true}
            placeholder="Enter your password"
            style={[style.inputContainer, { fontSize: 16 }]}
            onChangeText={setPassword}
          />
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={logginIn}
            // onPress={() => navigation.navigate("SettingScreen")}
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
