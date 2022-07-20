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
import CardQuestions from "../components/CardQuestions";
import { ScrollView } from "react-native-gesture-handler";

export default function QuestionFromPartner({ navigation }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetch() {
      try {
        const data = await axios.get("https://server-addict.herokuapp.com/pub");
        setProducts(data.data.data);
        setIsLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);
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

      {isLoading && (
        <ScrollView>
          {products.map((item, index) => {
            return (
              <CardQuestions
                product={item}
                navigation={navigation}
                key={index}
              />
            );
          })}
        </ScrollView>
      )}
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
