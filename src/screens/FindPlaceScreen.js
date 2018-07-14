import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../components/PlaceList/PlaceList";

class FindPlaceScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} />
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

const stateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(stateToProps)(FindPlaceScreen);
