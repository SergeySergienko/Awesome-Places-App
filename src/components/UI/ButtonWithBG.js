import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const buttonWithBG = props => {
  const content = (
    <View
      style={[
        styles.button,
        { backgroundColor: props.backgroundColor },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text
        style={[styles.buttonText, props.disabled ? styles.disabledText : null]}
      >
        {props.children}
      </Text>
    </View>
  );
  if (props.disabled) {
    return content;
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "blue"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  disabled: {
    backgroundColor: "#eee",
    borderColor: "#aaa"
  },
  disabledText: {
    color: "#ccc"
  }
});

export default buttonWithBG;
