import React from "react";
import { SafeAreaView, StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.dark,
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ViewImageScreen;
