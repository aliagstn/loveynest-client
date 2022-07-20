import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import COLORS from "../consts/colors";
const { width } = Dimensions.get("screen");
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { db } from "../firebase";
import axios from "axios";
const Card = ({ topic, navigation }) => {
  const baseUrl = "https://9ae4-103-105-104-34.ap.ngrok.io"
  const addTopic = async (e) => {
    e.preventDefault();
    console.log("test");
    const myData = JSON.parse(await AsyncStorage.getItem("myData"))
    const access_token = JSON.parse(await AsyncStorage.getItem("access_token"))
    console.log(myData)
    await db.collection(`chat-couple-${myData.CoupleId}`).add({
      _id: topic.id,
      createdAt: new Date(),
      text: `-  ${myData.nickname} has recommend a topic to talk!  -\n\n${topic.name}`,
      user: {
        _id: myData.id,
        name: myData.nickname,
        avatar: myData.photoProfile,
      },
    });
    await axios({
      method: 'POST',
      url: `${baseUrl}/topics`,
      headers:{
        access_token
      },
      data:{
        status: true,
        TopicId: topic.id
      }
    })
    navigation.navigate("ChatScreen")
  };
  return (
    <TouchableOpacity onPress={addTopic}>
      <ImageBackground
        style={style.cardImage}
        source={{
          uri: topic.TopicCategory.imgTopic,
        }}
      >
        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)', flex: 1, marginTop: 137, borderRadius:15 }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 17,
              fontWeight: "bold",
              paddingHorizontal: 10,
              marginTop: 12
            }}
          >
            {topic.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 1.12,
    borderRadius: 15,
    marginRight: 20,
    overflow: "hidden",
    padding: 10,
  },
});

export default Card;
