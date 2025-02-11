import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../utils/colors";

export default function PageHeading({ title }) {
  return (
    <TouchableOpacity
      style={styles.navContainer}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-outline" size={27} color={colors.BLACK} />
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },

  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
});
