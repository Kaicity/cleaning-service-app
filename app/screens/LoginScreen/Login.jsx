import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 27,
            color: colors.WHITE,
            paddingTop: 20,
            paddingLeft: 15,
          }}
        >
          Nâng tầm sắc đẹp với dịch vụ {""}
          <Text style={{ fontWeight: "bold" }}>
            chăm sóc móng tay và làm tóc
          </Text>{" "}
          Chuyên Nghiệp
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: colors.PRIMARY,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
