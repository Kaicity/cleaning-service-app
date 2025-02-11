import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import Entypo from "@expo/vector-icons/Entypo";

export default function Heading({ text, isViewAll }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && (
        <View style={styles.seeAllContainer}>
          <Text
            style={{
              fontFamily: "outfit-regular",
              fontSize: 14,
              color: colors.PRIMARY,
            }}
          >
            Xem thêm
          </Text>
          <Entypo name="chevron-small-right" size={18} color={colors.PRIMARY} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  seeAllContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
