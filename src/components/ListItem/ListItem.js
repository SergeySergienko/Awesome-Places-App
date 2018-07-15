import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity style={styles.container} onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        source={props.placeImage}
        resizeMode="cover"
        style={styles.placeImage}
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  listItem: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 25,
    height: 50,
    width: 50
  }
});

export default listItem;
