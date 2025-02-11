import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../utils/colors";

export default function Login({ navigation }) {
  const goToHome = () => {
    navigation.replace("tabs"); // Sử dụng navigation để điều hướng
  };

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
            paddingRight: 15,
            textAlign: "center",
          }}
        >
          Cùng chúng tôi
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Trải nghiệm dịch vụ dọn vệ sinh
          </Text>{" "}
          dành cho bạn
        </Text>

        <Text
          style={{
            fontSize: 17,
            color: colors.WHITE,
            textAlign: "center",
            marginTop: 20,
            padding: 10,
          }}
        >
          Ứng dụng cho phép tìm những dịch vụ tiện ích dọn dẹp vệ sinh nội thất,
          nhà cửa
        </Text>

        <TouchableOpacity style={styles.button} onPress={goToHome}>
          <Text
            style={{ fontSize: 17, textAlign: "center", color: colors.PRIMARY }}
          >
            Bắt đầu ngay
          </Text>
        </TouchableOpacity>
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
  button: {
    margin: 15,
    padding: 15,
    backgroundColor: colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
});
