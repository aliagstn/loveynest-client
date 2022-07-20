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

const CardMyQuestion = ({ product, navigation }) => {
  return (
    <View>
      <View style={style.card}>
        <Image source={{ uri: 'https://cdn.dribbble.com/users/2417352/screenshots/15197452/media/8e61474be3aef19d7f058bf42db34e18.png?compress=1&resize=768x576&vertical=top'}} style={style.cardImage} />
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
            Makanan Kesukaan || 10 Questions
          </Text>
        </View>
      </View>
    </View>
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

export default CardMyQuestion;
