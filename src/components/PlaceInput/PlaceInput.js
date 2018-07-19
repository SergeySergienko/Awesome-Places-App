import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import DefaultInput from '../UI/DefaultInput';

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
        <DefaultInput placeholder='Place Name'
                      value={this.state.placeName}
                      onChangeText={this.placeNameChangeHandler}/>
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
});
