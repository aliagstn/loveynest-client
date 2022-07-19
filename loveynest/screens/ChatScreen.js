import React, { useLayoutEffect } from "react";
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

export default function Chat({navigation}) {
  const [messages, setMessages] = useState([]);
  const partnerData = {
    username: "jodohnya alia",
    avatar:
      "https://i.pinimg.com/736x/70/0d/ab/700dabcf93f059fec3cd14ba753236af--male-fairy-baby-boys-names.jpg",
    CoupleId: 1,
    id: 2,
  };
  const myData = {
    username: "alia",
    avatar:
      "https://i.pinimg.com/736x/b3/d1/cb/b3d1cb62b14c9bdd4400105ca99321df.jpg",
    CoupleId: 1,
    id: 1,
  };
  useLayoutEffect(() => {
    const unsubscribe = db
      .collection(`chat-couple-${myData.CoupleId}`)
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
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection(`chat-couple-${myData.CoupleId}`).add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const addTopic = (e) => {
    e.preventDefault();
    console.log("test");
    const topic = {
      topicId: 1,
      topic:
        "Which one of these objects reminds you most of me: An umbrella, light bulb, cell phone, loaf of bread, or pencil. Why?",
    };
    db.collection(`chat-couple-${myData.CoupleId}`).add({
      _id: topic.topicId,
      createdAt: new Date(),
      text: `-  ${myData.username} has recommend a topic to talk!  -\n\n${topic.topic}`,
      user: {
        _id: myData.id,
        name: myData.username,
        avatar: myData.avatar,
      },
    });
  };
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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
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
            marginTop:40,
            paddingBottom:5,
          }}
        >
          {partnerData.username}
        </Text>
        <Ionicons onPress={navigation.goBack} name="chevron-back-outline" size={30} color={"#475569"} style={{position: 'absolute', marginTop: 40, marginLeft: 10}} />
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
