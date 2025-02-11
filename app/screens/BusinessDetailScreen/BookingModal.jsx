import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import CalendarPicker from "react-native-calendar-picker";
import Heading from "../../components/Heading";
import { useEffect, useState } from "react";

export default function BookingModal({ hideModal }) {
  const [timeList, setTimeList] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    // Ca Sáng
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    // Ca Chiều
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeList(timeList);
  };

  console.log(timeList);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navContainer} onPress={() => hideModal()}>
        <Ionicons name="arrow-back-outline" size={27} color={colors.BLACK} />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          Đặt dịch vụ
        </Text>
      </TouchableOpacity>

      {/* Calendar Setion */}
      <Heading text="Chọn ngày" />
      <View style={styles.calendarContainer}>
        <CalendarPicker
          width={340}
          minDate={Date.now()}
          todayBackgroundColor={colors.BLACK}
          todayTextStyle={{ color: colors.WHITE }}
          selectedDayColor={colors.PRIMARY}
          selectedDayTextColor={colors.WHITE}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 20,
  },

  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },

  calendarContainer: {
    backgroundColor: colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
  },
});
