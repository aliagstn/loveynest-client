import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function SettingScreen({ navigation }) {
  const baseUrl = "https://ac4e-180-252-243-64.ngrok.io"
  const [myData, setMyData] = useState({})
  const [partnerData, setPartnerData] = useState({})
  const gettingData =  async () => {
    try {
      const dataForMyData = JSON.parse(await AsyncStorage.getItem("myData"))
      const dataForPartnerData = JSON.parse(await AsyncStorage.getItem("partnerData"))
      setMyData(dataForMyData)
      setPartnerData(dataForPartnerData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    gettingData()
  }, [])

  const unpairing = async () => {
    try {
      const access_token = JSON.parse(await AsyncStorage.getItem("access_token"))
      await axios({
        method: 'PATCH',
        url: `${baseUrl}/users/delete/${myData.id}`,
        headers:{
          access_token
        }
      })
      await AsyncStorage.removeItem("CoupleId")
      await AsyncStorage.removeItem("myData")
      await AsyncStorage.removeItem("partnerData")
      
      navigation.navigate("OnBoardScreen")
    } catch (error) {
      console.log(error)
    }
  }
  const alertUnpair = () => {
    Alert.alert("Wait.. are you sure?","Please reconsider it ☹",[
      {
        text: "Yes",
        onPress: () => unpairing()
      },
      {
        text: "I still love them",
        onPress: () => console.log("still love")
      }
    ])
  }
  const loggingout = async () =>{
    try {
      await AsyncStorage.clear()
      navigation.navigate("OnBoardScreen")
    } catch (error) {
      console.log(error)
    }
  }

  const alertLogout = () => {
    Alert.alert("Logout","Are you sure to logout?",[
      {
        text: "Yes",
        onPress: () => loggingout()
      },
      {
        text: "No",
        onPress: () => console.log("doesnt logout")
      }
    ])
  }
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
              source={{uri:myData.photoProfile}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: COLORS.dark,
              }}
            >
              {myData.nickname}
            </Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              style={style.image}
              source={{uri:partnerData.photoProfile}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: COLORS.dark,
              }}
            >
              {partnerData.nickname}
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
        <TouchableOpacity style={style.btn} onPress={alertUnpair}>
          <Ionicons name="heart-dislike-circle-outline" color={COLORS.dark} size={40} style={style.icon} />
          <Text style={style.fontSetting}>Unpair with Partner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn} onPress={alertLogout}>
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
