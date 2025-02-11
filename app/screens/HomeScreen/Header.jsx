import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import UserAvatar from "../../../assets/userAvatar.png";
import colors from "../../utils/colors";
import Feather from "@expo/vector-icons/Feather";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Profile  */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.userImage} source={UserAvatar} />
          <View>
            <Text style={{ color: colors.WHITE, fontFamily: "outfit" }}>
              Xin chào,{" "}
            </Text>
            <Text
              style={{
                color: colors.WHITE,
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              Quang Hùng Master D
            </Text>
          </View>
        </View>
        <Feather name="bookmark" size={27} color={colors.WHITE} />
      </View>

      {/* Search bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Tìm kiếm" style={styles.textInput} />
        <Feather
          name="search"
          size={20}
          color={colors.PRIMARY}
          style={styles.btnSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  userImage: { width: 45, height: 45, borderRadius: 99, objectFit: "cover" },

  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  textInput: {
    backgroundColor: colors.WHITE,
    width: "85%",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontFamily: "outfit",
  },

  btnSearch: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
  },
});
