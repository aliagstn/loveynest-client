import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import COLORS from "../consts/colors";
const { width } = Dimensions.get("screen");

const Card = ({ product, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
      <ImageBackground
        style={style.cardImage}
        source={{
          uri: "https://cdn.dribbble.com/users/2417352/screenshots/15406419/media/3643b34e27bd868030ae69fa3524961f.png",
        }}
      >
        <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)', flex: 1, marginTop: 137, borderRadius: 8 }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 17,
              fontWeight: "bold",
              paddingHorizontal: 10,
              marginTop: 12
            }}
          >
            Should partner supports each other? How should they do it?
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 1.2,
    borderRadius: 15,
    marginRight: 20,
    overflow: "hidden",
    padding: 10,
  },
});

export default Card;
