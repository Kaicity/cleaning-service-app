import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../utils/colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItem({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("business-detail", { business: business })
      }
    >
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: business.images[0].url }} />
        <View>
          <Text
            style={{ color: colors.GREY, fontFamily: "outfit", fontSize: 15 }}
          >
            {business?.contactPerson}
          </Text>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
            {business?.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "outfit",
              color: colors.GREY,
              flexWrap: "wrap", // Cho phép chữ xuống dòng
              maxWidth: 270, // Hạn chế chiều rộng
            }}
          >
            <Entypo
              name="location-pin"
              size={20}
              color={colors.PRIMARY}
              style={{ marginRight: 10 }}
            />

            {business?.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.WHITE,
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
