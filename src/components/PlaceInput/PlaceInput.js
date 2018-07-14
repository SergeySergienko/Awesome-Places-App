import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = placeName => {
    this.setState({ placeName });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="   An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          title="Add"
          onPress={() => this.props.placeAddHandler(this.state.placeName)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: "80%"
    // borderColor: 'black',
    // borderWidth: 1
  }
});
