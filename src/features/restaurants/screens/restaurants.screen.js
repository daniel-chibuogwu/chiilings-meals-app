import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info.card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const RestaurantSearchbar = styled(Searchbar)`
  margin-horizontal: 8px;
  margin-vertical: 16px;
  border-radius: 3px;
  height: 46px;
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeArea>
      <RestaurantSearchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
