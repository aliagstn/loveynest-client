import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  // KeyboardAvoidingView,
  Platform,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import * as Clipboard from "expo-clipboard";
import {
  fetchAllCouples,
  fetchDataPartner,
  fetchDataUser,
  getCoupleByIdToGetPartnerData,
  partnerDataFetchedSuccess,
  updatePartnerCode,
  userDataFetchedSuccess,
} from "../store/actions/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

const windowHeight = Dimensions.get("window").height;
export default function InputCode({ navigation, route }) {
  const baseUrl = "https://ac4e-180-252-243-64.ngrok.io";
  const { id } = route.params;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  // const partner = useSelector((state) => state.user.partner)
  const [userCode, setUserCode] = useState("");
  const [inputPartnerCode, setInputPartnerCode] = useState("");
  const [copiedText, setCopiedText] = React.useState("");
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    dispatch(fetchDataUser(id));
  }, []);
  useEffect(() => {
    gettingUserData();
  }, [userData]);
  const gettingUserData = async () => {
    try {
      setLoading(false)
      console.log(userData, "<< di use effect ke2");
      setUserCode(userData.userCode);
      if (userData?.partnerCode) {
        await storeData();
        navigation.navigate("TabNavigation");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(userCode);
  };
  const updatingPartnerCodeForUser = async () => {
    try {
      const access_token = JSON.parse(
        await AsyncStorage.getItem("access_token")
      );
      console.log(inputPartnerCode);
      const partnerCode = inputPartnerCode;
      const response = await axios({
        method: "PATCH",
        url: `${baseUrl}/users/input/${id}`,
        data: {
          partnerCode,
        },
        headers: {
          access_token,
        },
      });
      const data = response.data.data;
      await storeData();
      navigation.navigate("TabNavigation");
    } catch (error) {
      console.log(error);
    }
  };
  const storeData = async () => {
    try {
      console.log(userData, "user information");
      await AsyncStorage.setItem("CoupleId", JSON.stringify(userData.CoupleId));
      const CoupleId = userData.CoupleId;
      const userId = userData.id;
      const access_token = JSON.parse(
        await AsyncStorage.getItem("access_token")
      );
      const response = await axios({
        method: "GET",
        url: `${baseUrl}/couples/${CoupleId}/${userId}`,
        headers: {
          access_token,
        },
      });
      console.log(response.data, "hm");
      const partner = response.data.Users[0];
      console.log(partner, "<<< dari input code partnerrrr");
      const jsonValuePartner = JSON.stringify(partner);
      await AsyncStorage.setItem("partnerData", jsonValuePartner);
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem("myData", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };
  // const gettingPartnerData = async (userId, CoupleId) => {
  //   try {
  //     console.log(userId, CoupleId)
  //     const response = await axios.get(`${baseUrl}/couples/${CoupleId}/${userId}`)
  //     console.log(response.data.Users[0])
  //     dispatch(partnerDataFetchedSuccess(response.data.Users[0]))
  //     return response.data.Users[0]
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  if(loading){
    return (
      <SafeAreaView style={{flex:1}}>
        <Text style={{textAlign:'center'}}>Loading..</Text>
      </SafeAreaView>
    )
  }
  return (
    <KeyboardAwareScrollView
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
          marginTop: windowHeight <= 750 ? 90 : 100,
          flex: 1,
          marginBottom: 10,
        }}
      >
        <View>
          <Text style={style.title}>Share my code with my partner</Text>
        </View>
        <TextInput
          value={userCode}
          // value={"LV-1232672"}
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
          onChangeText={setInputPartnerCode}
        />
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40 }}>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={updatingPartnerCodeForUser}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Pair with partner
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
    fontSize: windowHeight <= 750 ? 25 : 32,
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
