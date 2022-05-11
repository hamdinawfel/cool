import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
export default function Home() {
  return (
    <SafeAreaView style={styles.SaveViewAndroid}>
      <HeaderTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SaveViewAndroid: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
