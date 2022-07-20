import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../consts/colors";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import {
  updatingUserData,
  uploadUserPhotoProfile,
} from "../store/actions/userAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UploadPhotoProfile({ navigation, route }) {
  const { nickname, id } = route.params;
  const [image, setImage] = useState("");
  const [imgBase64, setImageBase64] = useState("");
  const [imageUploadedToCloudinary, setImageUploadedToCloudinary] =
    useState(false);
  const dispatch = useDispatch();
  const [theProfilePicture, setTheProfilePicture] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    // console.log(result.base64);

    if (!result.cancelled) {
      setImage(result.uri);
      setImageBase64(`data:image/jpg;base64,${result.base64}`);
    }
  };

  const deleteImage = () => {
    setImage("");
  };

  const uploadingPhotoProfile = () => {
    dispatch(uploadUserPhotoProfile(imgBase64))
      .then((data) => {
        setImageUploadedToCloudinary(true);
        setTheProfilePicture(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // navigation.navigate("InputCode")
  };

  const updatingProfilePictureUser = async () => {
    // console.log(theProfilePicture);
    // console.log(id);
    // console.log(nickname, "nickname");
    try {
      const access_token = JSON.parse(await AsyncStorage.getItem("access_token"))
      // console.log(access_token, "<<<<<<<")
      console.log(nickname, id)
      dispatch(
        updatingUserData({ id, nickname, photoProfile: theProfilePicture, access_token })
      )
        .then(() => {
          navigation.navigate("InputCode", {id});
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
        <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
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
          {image ? (
            <View style={{ flexDirection: "row" }}>
              <Image source={{ uri: image }} style={style.imageProfile} />
              <TouchableOpacity onPress={pickImage}>
                <Ionicons name="create" color={"#94a3b8"} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteImage}>
                <Ionicons name="trash" color={"#94a3b8"} size={25} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={style.uploadBtn} onPress={pickImage}>
              <Ionicons name="add-circle-outline" color={"#94a3b8"} size={50} />
            </TouchableOpacity>
          )}
        </View>
        {imageUploadedToCloudinary && (
          <View
            style={{
              flex: 1,
              paddingBottom: 40,
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              style={style.btnLogin}
              onPress={updatingProfilePictureUser}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        )
          }
          {
          (
          <View
            style={{
              flex: 1,
              paddingBottom: 40,
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              style={style.btnLogin}
              onPress={uploadingPhotoProfile}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
              >
                Upload
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {
          (
          <View
            style={{
              flex: 1,
              paddingBottom: 40,
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              style={style.btnLogin}
              onPress={uploadingPhotoProfile}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
              >
                Uploading image..
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
    width: 120,
    height: 120,
    borderRadius: 50,
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
