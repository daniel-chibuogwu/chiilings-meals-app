import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>

        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "green",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
