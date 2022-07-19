import React, { useState, useEffect } from "react";
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
  Animated,
  ScrollView,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
const windowHeight = Dimensions.get("window").height;
const BG_IMG =
  "https://cdn.pixabay.com/photo/2020/05/06/06/18/blue-5136251_960_720.jpg";
const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 70;
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;
export default function AnsweredScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getListPhotos();
  }, []);

  const getListPhotos = () => {
    const apiURL = "https://jsonplaceholder.typicode.com/photos";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.log("Request API Error: ", error);
      })
      .finally(() => setIsLoading(false));
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={[style.item]}>
        <Image
          style={style.image}
          source={require("../assets/love.gif")}
          resizeMode="contain"
        />
        <View style={style.wrapText}>
          <Text style={style.fontSize}>{index + ". " + item.title}</Text>
        </View>
      </View>
    );
  };

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
        <Text>Back to home</Text>
      </TouchableOpacity>
      {/* {isLoading(
        <ActivityIndicator />
      )} */}
      <FlatList
        data={data}
        keyExtractor={(item) => `key-${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20, marginTop: 100 }}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  headerBtn: {
    marginTop: 40,
    position: "absolute",
    marginLeft: 15,
    height: 50,
    width: 120,
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
  image: {
    width: 70,
    height: HEIGHT_IMG,
    borderRadius: 70,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
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
