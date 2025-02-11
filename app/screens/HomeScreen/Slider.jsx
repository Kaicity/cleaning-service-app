import { FlatList, Image, StyleSheet, View } from "react-native";
import globalAPI from "../../utils/globalAPI";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading";

export default function Slider() {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    try {
      const res = await globalAPI.getSlider();
      setSliders(res?.sliders);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Sau khi load xong thì set loading = false
    }
  };

  return (
    <View>
      <Heading text="Dành cho bạn" />

      <FlatList
        data={sliders}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginRight: 20 }}>
              <Image style={styles.slider} source={{ uri: item?.image?.url }} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    width: 320,
    height: 150,
    borderRadius: 20,
  },
});
