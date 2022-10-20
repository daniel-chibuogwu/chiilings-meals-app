import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        style={styles.inputContainer}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View style={styles.listContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputContainer: {
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 3,
    height: 46,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#144383",
    padding: 16,
  },
});
