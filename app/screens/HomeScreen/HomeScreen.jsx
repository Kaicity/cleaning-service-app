import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <Header />
        <View style={{ padding: 20 }}>
          <Slider />
          <View style={styles.spacing}></View>
          <Categories />
          <View style={styles.spacing}></View>
          <BusinessList />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  spacing: {
    marginBottom: 20,
  },
});
