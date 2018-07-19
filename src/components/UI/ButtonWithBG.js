import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const buttonWithBG = props => (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, {backgroundColor: props.backgroundColor}]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
  },
  buttonText: {
    color:'#fff',
    fontWeight: 'bold',
  }
});

export default buttonWithBG;