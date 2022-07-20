import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import COLORS from "../consts/colors";
import Card from "../components/Card";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { getAllTopics } from "../store/actions/userAction";

const { width } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
  const [topics, setTopics] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [myData, setMyData] = useState({})
  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem("myData"))
      setMyData(userData)
      const access_token = await AsyncStorage.getItem("access_token");
      console.log(access_token, "<<< akan dikirim ke dispatch dari home screen")
      dispatch(getAllTopics(JSON.parse(access_token)))
        .then((data) => {
          setTopics(data);
          setIsLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={style.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Halo!</Text>
          <Text
            style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
          >
            {myData.nickname}
          </Text>
        </View>
        <Image
          source={{
            uri: myData.photoProfile,
          }}
          style={style.profileImage}
        />
      </View>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={style.title}>Daily Conversation</Text>
        </View>
        {!isLoading && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <ImageBackground
              style={style.cardImageLoad}
            >
              <ActivityIndicator size={70} color={COLORS.dark} style={{marginTop: 40}} />
            </ImageBackground>
          </View>
        )}

        {isLoading && (
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={topics}
            renderItem={({ item }) => (
              <Card topic={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        )}

        <View style={{ marginHorizontal: 20, marginTop: 23 }}>
          <Text style={style.title}>Weekly Quizzes</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("StartQuizScreen")}
          style={{ marginHorizontal: 20, marginTop: 20 }}
        >
          <ImageBackground
            style={style.cardQuiz}
            source={{
              uri: "https://cdn.dribbble.com/users/2417352/screenshots/14983340/media/7fd465edd38a603bb299a58b4bd51ee9.png?compress=1&resize=768x576&vertical=top",
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(52, 52, 52, 0.65)",
                flex: 1,
                marginTop: 150,
                borderRadius: 8
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 17,
                  fontWeight: "bold",
                  paddingHorizontal: 10,
                  marginTop: 12,
                }}
              >
                Prioritizing Love || 10 Questions
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("FormQuiz")}
          style={{ marginHorizontal: 20, marginTop: 50, marginBottom: 70 }}
        >
          <ImageBackground
            style={style.cardImage}
            source={{
              uri: "https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1658043379~exp=1658043979~hmac=bfc256f3477183c740688c0c6257122b520c43efe47c8f2ea7f7f0cd8166d370&w=740",
            }}
          >
            <View
              style={style.uploadBtn}
              onPress={() => navigation.navigate("FormQuiz")}
            >
              <Text
                style={{
                  fontSize: 20,
                  paddingHorizontal: 10,
                  color: "#64748b",
                  marginBottom: 10,
                  fontWeight: "700",
                }}
              >
                Make your own quiz for your partner now!
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#475569",
  },
  cardImage: {
    height: 180,
    width: width / 1.12,
    borderRadius: 15,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  cardImageLoad: {
    height: 180,
    width: width / 1.12,
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: '#F3F3F3'
  },
  cardQuiz: {
    height: 220,
    width: width / 1.12,
    borderRadius: 15,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
  },
  uploadBtn: {
    marginTop: 25,
    marginRight: 60,
    marginLeft: 15,
    height: 120,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
