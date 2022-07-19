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
} from "react-native";
import COLORS from "../consts/colors";
import Card from "../components/Card";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

export default function HomeScreen({ navigation }) {
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
            Shin Hye
          </Text>
        </View>
        <Image
          source={{
            uri: "https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg",
          }}
          style={style.profileImage}
        />
      </View>
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={style.title}>Daily Conversation</Text>
        </View>
        <FlatList
          snapToInterval={width - 20}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          renderItem={({ item }) => (
            <Card product={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
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
          onPress={() => navigation.navigate("ChatScreen")}
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
              onPress={() => navigation.navigate("ChatScreen")}
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
