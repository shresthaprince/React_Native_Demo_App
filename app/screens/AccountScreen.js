import React from "react";
import PaddedScreen from "./../components/PaddedScreen";
import ListItem from "../components/lists/ListItem";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "./../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "./../components/lists/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "red",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "green",
    },
  },
];

function AccountScreen(props) {
  return (
    <PaddedScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Tim"
          subTitle="Hello Guys"
          image={require("../assets/person.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        ImageComponent={<Icon name="logout" backgroundColor="orange" />}
      />
    </PaddedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
