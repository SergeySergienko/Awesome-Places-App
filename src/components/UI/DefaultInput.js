import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    {...props}
    style={[
      styles.input,
      props.style,
      !props.valid && props.touched ? styles.invalid : null
    ]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#bbb",
    backgroundColor: "#eee",
    padding: 5,
    marginVertical: 5
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderColor: "#f00"
  }
});

export default defaultInput;
