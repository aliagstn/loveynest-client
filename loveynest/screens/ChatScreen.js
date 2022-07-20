import React, { useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { useCallback, useState } from "react";
import COLORS from "../consts/colors";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Chat({navigation}) {
  const [messages, setMessages] = useState([]);
  const [myData, setMyData] = useState({})
  const [partnerData, setPartnerData] = useState({})
  const [coupleid, setcoupleid] = useState(0)
  const gettingData = async () => {
    try {
      const dataForMyData = JSON.parse(await AsyncStorage.getItem("myData"))
      const dataForPartnerData = JSON.parse(await AsyncStorage.getItem("partnerData"))
      const idForCouple = JSON.parse(await AsyncStorage.getItem("CoupleId"))
      setcoupleid(idForCouple)
      setMyData({
        username: dataForMyData.nickname,
        avatar: dataForMyData.photoProfile,
        id: +dataForMyData.id,
        CoupleId: dataForMyData.CoupleId
      })
      setPartnerData({
        username: dataForPartnerData.nickname,
        avatar: dataForPartnerData.photoProfile,
        id: +dataForPartnerData.id,
        CoupleId: dataForPartnerData.CoupleId
      })
      const unsubscribe = db
      .collection(`chat-couple-${idForCouple}`)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    return unsubscribe;
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(async () => {
  //   gettingData()
  // })
  useLayoutEffect( () => {
    gettingData()    
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection(`chat-couple-${coupleid}`).add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  
  const editBubble = (props) => {
    if (props?.currentMessage?.text?.charAt(0) === "-") {
      return (
        <Bubble
          wrapperStyle={{
            left: {
              backgroundColor: "#fde7f3",
              borderTopLeftRadius: 20,
              width: 350,
              paddingVertical: 5,
              marginVertical: 15,
            },
            right: {
              backgroundColor: "#1a2465",
              borderTopRightRadius: 20,
              width: 350,
              paddingVertical: 5,
              marginVertical: 15,
            },
          }}
          {...props}
        />
      );
    } else {
      return (
        <Bubble
          wrapperStyle={{
            right: { borderTopRightRadius: 30, padding: 5, marginVertical: 5 },
            left: { borderTopLeftRadius: 30, padding: 5, marginVertical: 5 },
          }}
          {...props}
        />
      );
    }
  };
  const editSend = (props) => {
    return (
        <Send
        {...props}
        containerStyle={styles.sendContainer}
        >
            <Ionicons name="send-outline"
          size={30}
          color={"#384BCB"} />
        </Send>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, marginTop:100}}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            justifyContent: "center",
            marginTop:20,
            paddingBottom:15,
          }}
        >
          {partnerData.username}
        </Text>
        <Ionicons onPress={navigation.goBack} name="chevron-back-outline" size={30} color={"#475569"} style={{position: 'absolute', marginTop: 20, marginLeft: 10}} />
      <GiftedChat
        alwaysShowSend={true}
        showAvatarForEveryMessage={true}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: myData.id,
          name: myData.username,
          avatar: myData.avatar,
        }}
        renderBubble={editBubble}
        renderSend={editSend}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    backgroundColor: "#cacaca",
    height: 41,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  sendContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 15,
  },
});
