import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { create, userQuestion3 } from "../store/actions/formAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddQuestion({ navigation }) {
  const userQuiz = useSelector((state) => state.form.Quiz);
  const [answer, setAnswer] = useState("A");
  const [checked, setChecked] = useState(0);
  var option = ["Option A", "Option B"];
  const dispatch = useDispatch();
  const [errorQuestion, setErrorQuestion] = useState(false);
  const [errorOptionA, setErrorOptionA] = useState(false);
  const [errorOptionB, setErrorOptionB] = useState(false);
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");

  let saveState = () => {
    dispatch(
      userQuestion3({
        question,
        optionA,
        optionB,
        answer,
      })
    );
  };

  // console.log(userQuiz, '<----------------- Quiz');
  const createQuiz = async () => {
    if (!question) {
      setErrorQuestion(true);
    }
    if (!optionA) {
      setErrorOptionA(true);
    }
    if (!optionB) {
      setErrorOptionB(true);
    }
    const access_token= JSON.parse(await AsyncStorage.getItem("access_token"))
    if (question, optionA, optionB) {
      dispatch(create(access_token))
      .then(() => {
        navigation.navigate("QuestionScreen");
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const combineFunction = () => {
    saveState();
    createQuiz();
  }

  const combineFunctionAdd = () => {
    saveState();
    navigation.navigate("AddQuestion4")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
        <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
      </TouchableOpacity>
      <ScrollView
        style={{ paddingHorizontal: 20, paddingTop: 20, marginTop: 115 }}
      >
        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={style.title}>Question</Text>
          </View>
          {errorQuestion ? (
            <TextInput
              placeholder="Enter your question"
              placeholderTextColor={"red"}
              style={[style.inputContainer, { marginTop: 20, fontSize: 16 }]}
              onChangeText={setQuestion}
            />
          ) : (
            <TextInput
              placeholder="Enter your question"
              style={[style.inputContainer, { marginTop: 20, fontSize: 16 }]}
              onChangeText={setQuestion}
            />
          )}

          <View style={{ marginTop: 10 }}>
            <Text style={style.underTitle}>Option Answer</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {errorOptionA ? (
              <TextInput
                placeholder="Enter your option A"
                placeholderTextColor={"red"}
                style={[style.inputContainer, { marginTop: 20, fontSize: 16 }]}
                onChangeText={setOptionA}
              />
            ) : (
              <TextInput
                placeholder="Enter your option A"
                style={[
                  style.inputContainer,
                  { marginTop: 20, marginRight: 5, fontSize: 14, flex: 1 },
                ]}
                onChangeText={setOptionA}
              />
            )}

            {errorOptionB ? (
              <TextInput
                placeholder="Enter your option B"
                placeholderTextColor={"red"}
                style={[style.inputContainer, { marginTop: 20, fontSize: 16 }]}
                onChangeText={setOptionB}
              />
            ) : (
              <TextInput
                placeholder="Enter your option B"
                style={[
                  style.inputContainer,
                  { marginTop: 20, fontSize: 14, flex: 1 },
                ]}
                onChangeText={setOptionB}
              />
            )}
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={style.underTitle}>Correct Answer</Text>
          </View>
          <View style={style.btn}>
            {option.map((option, key) => {
              return (
                <View key={option}>
                  {checked == key ? (
                    <TouchableOpacity style={style.btn}>
                      <Image
                        style={style.img}
                        source={require("../assets/radio_checked.png")}
                      />
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(key);
                        if (key == 0) {
                          setAnswer("A");
                        } else {
                          setAnswer("B");
                        }
                      }}
                      style={style.btn}
                    >
                      <Image
                        style={style.img}
                        source={require("../assets/radio-unchecked.png")}
                      />
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 40,
            paddingBottom: 40,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={style.btnAdd}
            onPress={() => combineFunctionAdd()}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Add Question
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnSubmit} onPress={() => combineFunction()}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#334155",
  },
  underTitle: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "600",
    color: "#334155",
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
  btnSubmit: {
    height: 60,
    backgroundColor: "#384BCB",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  btnAdd: {
    height: 60,
    backgroundColor: "#384BCB",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  radio: {
    flexDirection: "row",
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});
