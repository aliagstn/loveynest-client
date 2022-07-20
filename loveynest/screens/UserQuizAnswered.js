import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import COLORS from "../consts/colors";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width } = Dimensions.get("screen");
import CardTitleAnsweredUser from "../components/CardTitleAnsweredUser";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserQuizAnswered({ navigation }) {
  const baseUrl = "https://9ae4-103-105-104-34.ap.ngrok.io"
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch();
    // setIsLoading(true);
  }, []);
  const fetch = async () => {
    try {
      const access_token = JSON.parse(await AsyncStorage.getItem("access_token"))
      const data = await axios({
        method:'GET',
        url:`${baseUrl}/userquiz/quiz-done`,
        headers:{
          access_token
        }
      });
      console.log(data.data)
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    } finally{
      setIsLoading(true)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          paddingBottom: 15,
          flexDirection: "row",
        }}
      >
        <Ionicons
          onPress={() => navigation.navigate("TabNavigation")}
          name="chevron-back-outline"
          size={30}
          color={"#475569"}
        />
        <Text style={style.title}>Questions from partner</Text>
      </View>
      {!isLoading && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 250,
          }}
        >
          <ActivityIndicator size={70} color={COLORS.dark} />
        </View>
      )}

      {isLoading &&
        <ScrollView>
          {
            products.length === 0 &&
            <Text>Is empty</Text>
          }
          {products.map((item, index) => {
            return (
              <CardTitleAnsweredUser
                product={item}
                navigation={navigation}
                key={index}
              />
            );
          })}
        </ScrollView>
      }
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#475569",
    marginLeft: 10,
  },
});
