import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import CardAppAnswered from "../components/CardAppAnswered";
const windowHeight = Dimensions.get("window").height;
const BG_IMG =
  "https://cdn.pixabay.com/photo/2020/05/06/06/18/blue-5136251_960_720.jpg";
const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 70;
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseUrl } from "../data/baseUrl";

export default function AppQuizAnswered({ navigation }) {
  const [responseUser, setresponseUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const myData = JSON.parse(await AsyncStorage.getItem("myData"));
        const id = myData.id;
        const { data } = await axios.get(`${baseUrl}/appquiz/result/${id}`);
        console.log(data, "<<<<< data 0");
        setresponseUser(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4F4F4",
        flexDirection: "column",
      }}
    >
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={70}
      />

      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity
        style={style.headerBtn}
        onPress={() => navigation.navigate("TabNavigation")}
      >
        <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
      </TouchableOpacity>

      {!isLoading && (
        <ScrollView style={{ padding: 20, marginTop: 100 }}>
          {responseUser.length === 0 && (
            <View style={{marginTop: 300}}>
            <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: COLORS.dark,
              paddingHorizontal: 40,
              
            }}
          > You and your partner haven't answered weekly quiz .
          </Text>
        </View>
          )
          
          }
          {responseUser.length !== 0 && (
            <View>
              {responseUser[0].responseUser.map((item, index) => (
                <CardAppAnswered
                  propsResponseUser={item}
                  propsResponsePartner={responseUser[1]?.responseUser[index]}
                  propsUser1={responseUser[0]?.Couple.Users[0]}
                  propsUser2={responseUser[0]?.Couple.Users[1]}
                  propsQuestion={responseUser[0]?.AppQuiz.question[index]}
                  navigation={navigation}
                  key={index}
                />
              ))}
            </View>
          )}
        </ScrollView>
      )}

      {isLoading && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 350,
          }}
        >
          <ActivityIndicator size={70} color={COLORS.dark} />
        </View>
      )}
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
  fontSize: {
    fontSize: 18,
  },
  fontSize2: {
    fontSize: 20,
    fontWeight: "700",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 70,
  },
  image2: {
    width: 50,
    marginTop: 10,
    height: 50,
    borderRadius: 70,
    borderColor: "#d1d5db",
    borderStyle: "solid",
    borderWidth: 0.7,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  wrapText2: {
    flex: 1,
    marginLeft: 4,
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    marginBottom: ITEM_MARGIN_BOTTOM,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    padding: ITEM_PADDING,
    borderRadius: 15,
  },
});
