import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import ButtonWithBG from "../UI/ButtonWithBG";
import imagePlaceholder from "../../assets/pic_1.jpg";
import { MapView } from "expo";

class PickLocation extends React.Component {
  state = {
    focusedLocation: {
      latitude: 49.9935,
      longitude: 36.2304,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122
    },
    locationChosen: false
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    // console.log(this.map);

    // this.map.animateToRegion({
    //   ...this.state.focusedLocation,
    //   latitude: coords.latitude,
    //   longitude: coords.longitude
    // });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  getLocationHandler = () => {
    // navigator.geolocation.getCurrentPosition(
    //   pos => {
    const coordsEvent = {
      nativeEvent: {
        coordinate: {
          latitude: 50.4501, // pseudo locate
          longitude: 30.5234 // pseudo locate
          // latitude: pos.coords.latitude,
          // longitude: pos.coords.longitude
        }
      }
    };
    this.pickLocationHandler(coordsEvent);
    // },
    //   err => {
    //     console.log(err);
    //     alert("Fetching failed.");
    //   }
    // );
  };

  render() {
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
    }
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          region={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          // ref={ref => (this.map = ref)}
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <ButtonWithBG
            backgroundColor="#29aaf4"
            onPress={this.getLocationHandler}
          >
            Locate Me
          </ButtonWithBG>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  map: {
    borderWidth: 1,
    backgroundColor: "#ccc",
    width: "80%",
    height: 250
  },
  button: {
    margin: 8
  }
});

export default PickLocation;
