import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../utils/colors";

export default function NotData() {
  return (
    <View style={styles.notDataContainer}>
      <View style={styles.notDataMainContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="null"
            size={24}
            color={colors.PRIMARY}
          />
        </View>
        <Text
          style={{ color: colors.GREY, fontFamily: "outfit", fontSize: 17 }}
        >
          Không có dữ liệu
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notDataContainer: {
    width: "100%",
    height: 100,
    backgroundColor: colors.WHITE,
    padding: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.GREY,
    justifyContent: "center",
    alignItems: "center",
  },

  notDataMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },

  iconContainer: {
    padding: 8,
    backgroundColor: colors.PRIMARY_LIGHT,
    borderRadius: 20,
  },
});
