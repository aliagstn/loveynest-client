import { TouchableOpacity, Text, View, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";
import COLORS from "../consts/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
const ITEM_MARGIN_BOTTOM = 30;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 70;
const { width } = Dimensions.get("screen");

const CardUserAnswered = ({ product, propsValuePartner, navigation }) => {
  return (
    <View>
      <View style={[style.item]}>
        <Text style={style.fontSize}>{product.question}</Text>
        <View style={{ flexDirection: "row" }}>
          {propsValuePartner === true && <Image style={style.image} source={require("../assets/love.png")} resizeMode="contain" />}
          {propsValuePartner === false && <Image style={style.image} source={require("../assets/smileV2.png")} resizeMode="contain" />}

          <View style={style.wrapText}>
            <Text style={style.fontSize2}>{product.responsePartner}</Text>
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

export default CardUserAnswered;