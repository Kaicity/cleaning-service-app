import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

export default function BusinessListItemSmall({ business }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: business?.images[0]?.url }} />
      <View>
        <Text
          style={{ fontSize: 17, fontFamily: "outfit-medium", marginBottom: 2 }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "outfit",
            color: colors.GREY,
            marginBottom: 2,
          }}
        >
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "outfit",
            color: colors.PRIMARY,
            padding: 3,
            backgroundColor: colors.PRIMARY_LIGHT,
            borderRadius: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 7,
          }}
        >
          {business?.category.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
});
