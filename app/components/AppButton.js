import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function AppButton({ text, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    borderRadius: 35,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
