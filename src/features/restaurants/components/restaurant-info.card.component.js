import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: indigo;
  font-weight: 500;
`;

import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Mega Chicken",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1665636606845-4c2fb3c91214?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ],
    address = "3rd Avenue Festac Town, Lagos",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 16, backgroundColor: "white" },
});
