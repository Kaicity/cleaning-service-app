import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({});
