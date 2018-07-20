import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import DefaultInput from '../UI/DefaultInput';

const placeInput = props => (
      <View style={styles.inputContainer}>
        <DefaultInput placeholder='Place Name'
                      value={props.placeName}
                      onChangeText={props.onChangeText}/>
      </View>
    );

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default placeInput;