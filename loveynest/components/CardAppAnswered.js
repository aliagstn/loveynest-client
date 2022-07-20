import { TouchableOpacity, Text, View, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
const ITEM_MARGIN_BOTTOM = 30;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 70;
const { width } = Dimensions.get("screen");

const CardAppAnswered = ({ propsResponseUser, navigation, propsQuestion, propsResponsePartner, propsUser1, propsUser2 }) => {
  return (
    <View>
      <View style={[style.item]}>
        <Text style={style.fontSize}>{propsQuestion}</Text>
        <View style={{ flexDirection: "row" }}>
          {propsResponseUser === "true" && <Image style={style.image} source={require("../assets/love.png")} resizeMode="contain" />}
          {propsResponseUser === "false" && <Image style={style.image} source={require("../assets/sedih.png")} resizeMode="contain" />}
          <Image style={style.image2} source={{ uri: propsUser1?.photoProfile }} resizeMode="contain" />
          <View style={style.wrapText}>
            <Text style={style.fontSize2}>
              {propsUser1?.nickname} <Ionicons name="arrow-forward-outline" size={23} color={"#475569"} /> {propsResponseUser === "true" && "Agree"} {propsResponseUser === "false" && "Disagree"} {!propsResponseUser && "N/A"}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          {propsResponsePartner === "true" && <Image style={style.image} source={require("../assets/love.png")} resizeMode="contain" />}
          {propsResponsePartner === "false" && <Image style={style.image} source={require("../assets/sedih.png")} resizeMode="contain" />}
          <Image style={style.image2} source={{ uri: propsUser2?.photoProfile }} resizeMode="contain" />
          <View style={style.wrapText}>
            <Text style={style.fontSize2}>
              {propsUser2?.nickname} <Ionicons name="arrow-forward-outline" size={23} color={"#475569"} /> {propsResponsePartner === "true"  && "Agree"} {propsResponsePartner === "false"  && "Disagree"} {!propsResponsePartner && "N/A"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  fontSize: {
    fontSize: 20,
  },
  fontSize2: {
    fontSize: 20,
    fontWeight: "700",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 5,
    borderRadius: 70,
  },
  image2: {
    width: 50,
    marginTop: 10,
    height: 50,
    borderRadius: 70,
    borderColor: "#d1d5db",
    borderWidth: 1,
  },
  wrapText: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  item: {
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

export default CardAppAnswered;