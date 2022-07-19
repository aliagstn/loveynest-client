import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function FormQuiz({ navigation }) {
  const [checked, setChecked] = useState(0);
  var gender = ['Option A', 'Option B'];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <TouchableOpacity style={style.headerBtn} onPress={navigation.goBack}>
        <Ionicons name="chevron-back-outline" size={30} color={"#475569"} />
      </TouchableOpacity>
      <ScrollView
        style={{ paddingHorizontal: 20, paddingTop: 20, marginTop: 115 }}
      >
        <View>
          <View>
            <Text style={style.title}>Title</Text>
          </View>
          <TextInput
            placeholder="Enter title quiz"
            style={[style.inputContainer, { marginTop: 20, fontSize: 16 }]}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={style.title}>Question</Text>
          </View>
          <TextInput
            placeholder="Enter your question"
            style={[style.inputContainer, { marginTop: 20, fontSize: 16 }]}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={style.underTitle}>Option Answer</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Enter your option A"
              style={[
                style.inputContainer,
                { marginTop: 20, marginRight: 5, fontSize: 14, flex: 1 },
              ]}
            />
            <TextInput
              placeholder="Enter your option B"
              style={[
                style.inputContainer,
                { marginTop: 20, fontSize: 14, flex: 1 },
              ]}
            />
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={style.underTitle}>Correct Answer</Text>
          </View>
          <View style={style.btn}>
        {gender.map((gender, key) => {
          return (
            <View key={gender}>
              {checked == key ? (
                <TouchableOpacity style={style.btn}>
                  <Image
                    style={style.img}
                    source={require('../assets/radio_checked.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                  }}
                  style={style.btn}>
                  <Image
                    style={style.img}
                    source={require('../assets/radio-unchecked.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
        </View>
        <View style={{ flex: 1, marginTop: 40, paddingBottom: 40, flexDirection: 'row' }}>
          <TouchableOpacity style={style.btnAdd} onPress={() => navigation.navigate("AddQuestion")}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "600" }}
            >
              Add Question
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btnSubmit} onPress={() => navigation.navigate("QuestionScreen")}>
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
    marginLeft: 10
  },
  btnAdd: {
    height: 60,
    backgroundColor: "#384BCB",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
});
