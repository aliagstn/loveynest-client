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
const { width } = Dimensions.get("screen");

const CardTitleAnsweredUser = ({ product, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailAnswerUser", {id: product.id})}>
      <View style={style.card}>
        <Image source={{ uri: product.QuizCategory.imgUrl}} style={style.cardImage} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.dark,
              fontSize: 17,
              fontWeight: "bold",
              paddingHorizontal: 10,
              justifyContent: 'center'
            }}
          >
            {product.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    height: 285,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    borderRadius: 20,
    marginVertical: 20,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
});

export default CardTitleAnsweredUser;
