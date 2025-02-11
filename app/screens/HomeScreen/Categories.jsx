import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import globalAPI from "../../utils/globalAPI";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    globalAPI.getCategory().then((res) => {
      setCategories(res?.categories);
      console.log(categories);
    });
  };

  return (
    <View>
      <Heading text="Danh mục" isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", { category: item?.name })
              }
            >
              <View style={styles.iconContainer}>
                <Image
                  style={styles.categories}
                  source={{ uri: item?.icon?.url }}
                />
              </View>
              <Text style={{ marginTop: 5, fontFamily: "outfit-medium" }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  categories: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },

  iconContainer: {
    padding: 17,
    borderRadius: 99,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.GREY,
  },
});
