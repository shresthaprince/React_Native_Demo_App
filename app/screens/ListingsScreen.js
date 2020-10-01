import React from "react";
import PaddedScreen from "../components/PaddedScreen";
import { FlatList, StyleSheet } from "react-native";
import Card from "./../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Jacket",
    price: 1000,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Jacket",
    price: 1000,
    image: require("../assets/jacket.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <PaddedScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </PaddedScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
export default ListingsScreen;
