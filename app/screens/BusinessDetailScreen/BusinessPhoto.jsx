import { FlatList, Image, Text, View } from "react-native";
import Heading from "../../components/Heading";

export default function BusinessPhoto({ business }) {
  return (
    <View>
      <Heading text="Hình ảnh" />
      <FlatList
        scrollEnabled={false}
        data={business.images}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              height: 120,
              flex: 1,
              borderRadius: 15,
              margin: 7,
            }}
          />
        )}
      />
    </View>
  );
}
