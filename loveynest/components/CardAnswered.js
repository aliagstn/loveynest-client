import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import COLORS from "../consts/colors";
const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 70;
const { width } = Dimensions.get("screen");

const CardAnswered = ({ product, navigation }) => {
  return (
    <View style={[style.item]}>
      <Image
        style={style.image}
        source={require("../assets/love.gif")}
        resizeMode="contain"
      />
      <Image
        style={style.image2}
        source={require("../assets/pp.jpg")}
        resizeMode="contain"
      />
      <View style={style.wrapText}>
        <Text style={style.fontSize}>
          Apa makanan favorit aku kalau musim hujan
        </Text>
        <Text style={style.fontSize2}>Mie Ayam</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
    marginRight: 5,
    borderRadius: 70,
  },
  image2: {
    width: 50,
    marginTop: 10,
    height: 50,
    borderRadius: 70,
    borderColor: "#d1d5db",
    borderWidth: 1.,
  },
  wrapText: {
    flex: 1,
    marginLeft: 15,
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

export default CardAnswered;
