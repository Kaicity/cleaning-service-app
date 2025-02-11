import { FlatList, View } from "react-native";
import Heading from "../../components/Heading";
import { useEffect, useState } from "react";
import globalAPI from "../../utils/globalAPI";
import BusinessListItemSmall from "./BusinessListItem";

export default function BusinessList() {
  const [businessLists, setBusinessLists] = useState([]);

  useEffect(() => {
    getBusinessLists();
  }, []);

  const getBusinessLists = () => {
    globalAPI.getBusinessList().then((res) => {
      setBusinessLists(res.businessLists);
    });
  };

  return (
    <View>
      <Heading text="Dịch vụ ưa thích" isViewAll={true} />
      <FlatList
        data={businessLists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
