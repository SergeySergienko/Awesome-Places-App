import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const placeDetail = props => {
  const { selectedPlace } = props;
  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image
          source={selectedPlace.image}
          resizeMode="contain"
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      visible={selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button
            title="Delete"
            color="#d35400"
            onPress={props.onItemDeleted}
          />
          <Button title="Close" color="#2c3e50" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 300
  },
  placeName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default placeDetail;
