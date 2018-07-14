import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.largeText}>{this.props.city}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
        <TextInput
          autoCorrect={false}
          placeholder="Search any city"
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center"
  }
});

const stateToProps = state => {
  return {
    city: state.city
  };
};

export default connect(stateToProps)(Weather);
