import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../utils/colors";
import Entypo from "@expo/vector-icons/Entypo";
import Heading from "../../components/Heading";
import BusinessPhoto from "./BusinessPhoto";

export default function BusinessDetail() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [business, setBusiness] = useState(param.business);
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    business && (
      <View>
        <ScrollView style={{ height: "90%" }}>
          <View>
            <TouchableOpacity
              style={styles.backBtnContainer}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back-outline"
                size={24}
                color={colors.WHITE}
              />
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: 300 }}
              source={{ uri: business?.images[0]?.url }}
            />

            <View style={styles.contentContainer}>
              <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
                {business.name}
              </Text>
              <View style={styles.subContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "outfit-medium",
                    color: colors.PRIMARY,
                  }}
                >
                  {business.contactPerson} ✨
                </Text>
                {""}

                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "outfit",
                    backgroundColor: colors.PRIMARY_LIGHT,
                    color: colors.PRIMARY,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  {business.category?.name}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "outfit",
                  color: colors.GREY,
                }}
              >
                <Entypo
                  name="location-pin"
                  size={25}
                  color={colors.PRIMARY}
                  style={{ marginRight: 10 }}
                />
                {business.address}
              </Text>

              <View
                style={{
                  borderWidth: 0.4,
                  color: colors.GREY,
                  marginBottom: 20,
                  marginTop: 20,
                }}
              ></View>

              <View>
                <Heading text={"Giới thiệu"} />
                <Text
                  numberOfLines={isReadMore ? 20 : 5}
                  style={{
                    fontSize: 16,
                    fontFamily: "outfit",
                    color: colors.GREY,
                    lineHeight: 28,
                    textAlign: "justify",
                  }}
                >
                  {business.about}
                </Text>
                <TouchableOpacity
                  style={{ marginLeft: "auto", padding: 10 }}
                  onPress={() => setIsReadMore(!isReadMore)}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "outfit",
                      color: colors.PRIMARY,
                    }}
                  >
                    {isReadMore ? "Thu gọn" : "Xem thêm"}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderWidth: 0.4,
                  color: colors.GREY,
                  marginBottom: 20,
                  marginTop: 20,
                }}
              ></View>

              <BusinessPhoto business={business} />
            </View>
          </View>
        </ScrollView>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.messageBtn}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "outfit-medium",
                textAlign: "center",
                color: colors.PRIMARY,
              }}
            >
              Nhắn tin
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookingBtn}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "outfit-medium",
                textAlign: "center",
                color: colors.WHITE,
              }}
            >
              Đặt ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    padding: 20,
    paddingTop: 50,
    zIndex: 10,
  },
  contentContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    margin: 10,
  },

  messageBtn: {
    backgroundColor: colors.WHITE,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },

  bookingBtn: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 99,
    flex: 1,
  },
});
