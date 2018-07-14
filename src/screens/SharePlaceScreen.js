import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaceInput from "../components/PlaceInput/PlaceInput";
import { connect } from "react-redux";
import { addPlace } from "../store/actions/index";

class SharePlaceScreen extends React.Component {
  placeAddHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput placeAddHandler={this.placeAddHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

const dispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  dispatchToProps
)(SharePlaceScreen);
