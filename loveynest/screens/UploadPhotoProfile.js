import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../consts/colors";
import { StatusBar } from "expo-status-bar";

export default function UploadPhotoProfile({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
          <Text style={style.title}>Upload your photo profile</Text>
        </View>
        <View>
          <Text style={style.underTitle}>
            We’ll use this to tell your partner it’s you
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          {image && (
            <Image source={{ uri: image }} style={style.imageProfile} />
          )}
          <TouchableOpacity style={style.uploadBtn} onPress={pickImage}>
            <Ionicons name="add-circle-outline" color={"#94a3b8"} size={50} />
          </TouchableOpacity>
        </View>
        <View
        style={{
          flex: 1,
          paddingBottom: 40,
          marginTop: 40
        }}
      >
        <TouchableOpacity
          style={style.btnLogin}
          onPress={() => navigation.navigate("InputCode")}
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
    borderWidth: 0.7,
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: "center",
    borderColor: "#d1d5db",
    borderWidth: 0.9,
  },
  title: {
    fontSize: 28,
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
  uploadBtn: {
    backgroundColor: "#F7F8F9",
    height: 120,
    width: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});
