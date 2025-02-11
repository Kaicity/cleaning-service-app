import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import globalAPI from "../../utils/globalAPI";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../utils/colors";
import BusinessListItem from "./BussinessListItem";
import NotData from "../../components/NotData";

export default function BusinessList() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [businessLists, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinnessListByCategory();
  }, []);

  const getBusinnessListByCategory = () => {
    globalAPI.getBusinessListByCategory(param.category).then((res) => {
      setBusinessList(res.businessLists);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={27} color={colors.BLACK} />
        <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
          {param.category}
        </Text>
      </TouchableOpacity>

      {businessLists.length > 0 ? (
        <View>
          <FlatList
            data={businessLists}
            renderItem={({ item, index }) => (
              <BusinessListItem business={item} />
            )}
          />
        </View>
      ) : (
        <NotData />
      )}
    </View>
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
