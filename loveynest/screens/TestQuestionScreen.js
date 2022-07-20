import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../constants";
import data from "../data/QuestionData";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TestQuestionScreen({ navigation , route}) {
  const baseUrl = "https://8425-180-252-243-64.ngrok.io"
  // const allQuestions = data;
  const {quizId}= route.params
  const [allQuestions1, setAllQuestions1] = useState([])
  const [allQuestions, setAllQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [isLoading, setIsLoading]= useState(true)
  useEffect(()=>{
    getData()
  }, [])
  useEffect(()=>{
    setAllQuestions(allQuestions1)
    console.log(allQuestions, "di use effect kedua")
    setIsLoading(false)
  })
  const getData = async ()=>{
    try {
      const res = await axios({
        method:'GET',
        url:`${baseUrl}/userquiz/${quizId}`
      })
      // console.log(res.data, "<<<< get data")
      setAllQuestions1(res.data.UserQuestions)
    } catch (error) {
      console.log(error)
    } finally {
      // console.log(allQuestions, "<<<< all questions finally")
      // setIsLoading(false)
    }
  }
  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex].answer;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const combineFunction = (option) => {
    validateAnswer(option);
    handleNext();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    if(isLoading){
      return (
        <Text> Loading </Text>
      )
    }else if (!isLoading){
      return (
        // <Text>{JSON.stringify(allQuestions[currentQuestionIndex].optionB)}</Text>
        <View>
          {/* {allQuestions[currentQuestionIndex]?.options.map((option) => ( */}
            <TouchableOpacity
              onPress={() => combineFunction(allQuestions[currentQuestionIndex]?.optionA)}
              // onPress={handleNext}
              disabled={isOptionsDisabled}
              style={{
                borderWidth: 3,
                borderColor: COLORS.secondary + "40",
                backgroundColor: COLORS.secondary + "20",
                height: 60,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: COLORS.white }}>{allQuestions[currentQuestionIndex]?.optionA}</Text>
              {allQuestions[currentQuestionIndex]?.optionA == currentOptionSelected ? (
                <View
                  // onPress={handleNext}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: COLORS.success,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => combineFunction(allQuestions[currentQuestionIndex]?.optionB)}
              // onPress={handleNext}
              disabled={isOptionsDisabled}
              style={{
                borderWidth: 3,
                borderColor: COLORS.secondary + "40",
                backgroundColor: COLORS.secondary + "20",
                height: 60,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: COLORS.white }}>{allQuestions[currentQuestionIndex]?.optionB}</Text>
              {allQuestions[currentQuestionIndex]?.optionB == currentOptionSelected ? (
                <View
                  // onPress={handleNext}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    backgroundColor: COLORS.success,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="check"
                    style={{
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          {/* ))} */}
        </View>
      );
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="light-content"
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
                justifyContent: 'center'
              }}
            >
                <View style={{ marginBottom: 20 }}>
                <Image
                  source={
                    score > allQuestions.length / 2
                      ? require("../assets/smiley.gif")
                      : require("../assets/sedih.gif")
                  }
                  style={
                    score > allQuestions.length / 2
                      ? {
                          width: 290,
                          height: 240,
                        }
                      : {
                          width: 200,
                          height: 200,
                        }
                  }
                />
              </View>
              <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center', marginTop: 20  }}>
                {score > allQuestions.length / 2 ? "Good Job! All is well for this week." : "I think you must discuss it with your partner."}
              </Text>
              
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: "#384BCB",
                  padding: 20,
                  width: "100%",
                  borderRadius: 20,
                  marginTop: 30
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                >
                  See your result
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Background Image */}
        <Image
          source={require("../assets/images/DottedBG.png")}
          style={{
            width: SIZES.width,
            height: 130,
            zIndex: -1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={"contain"}
        />
      </View>
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
