import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "./../components/lists/ListItem";
import PaddedScreen from "./../components/PaddedScreen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteButton from "../components/lists/ListItemDeleteButton";

const initialMessages = [
  {
    id: 1,
    title: "Hello",
    description: "R2D2",
    image: require("../assets/person.jpg"),
  },
  {
    id: 2,
    title: "Uil",
    description: "HAdjk",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <PaddedScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log(item.title)}
            renderRightActions={() => (
              <ListItemDeleteButton onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </PaddedScreen>
  );
}

export default MessagesScreen;
