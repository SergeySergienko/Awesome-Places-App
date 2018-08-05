import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import PlaceInput from "../components/PlaceInput/PlaceInput";
import { connect } from "react-redux";
import { addPlace } from "../store/actions/index";
import PickImage from "../components/PickImage/PickImage";
import PickLocation from "../components/PickLocation/PickLocation";
// import DefaultInput from '../components/UI/DefaultInput';
import ButtonWithBG from "../components/UI/ButtonWithBG";
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import imagePlaceholder from "../assets/pic_1.jpg";

class SharePlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.routeName
    };
  };

  state = {
    placeName: "",
    location: {
      value: null,
      valid: false
    },
    image: {
      value: null,
      valid: false
    }
  };

  placeNameChangeHandler = placeName => {
    this.setState({ placeName });
  };

  locationPickHandler = location => {
    this.setState({
      location: {
        value: location,
        valid: true
      }
    });
  };

  imagePickedHandler = image => {
    this.setState({
      image: {
        value: image,
        valid: true
      }
    });
  };

  placeAddHandler = () => {
    this.props.onAddPlace(
      this.state.placeName,
      this.state.location.value,
      this.state.image.value
    );
    this.props.navigation.navigate("Find");
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView>
          <View style={styles.container}>
            <MainText>
              <HeadingText>Share the place with us</HeadingText>
            </MainText>
            <PickImage onImagePicked={this.imagePickedHandler} />
            <PickLocation onLocationPick={this.locationPickHandler} />
            <PlaceInput
              placeName={this.state.placeName}
              onChangeText={this.placeNameChangeHandler}
            />
            <View style={styles.button}>
              <ButtonWithBG
                backgroundColor="#ff00aa"
                onPress={this.placeAddHandler}
                disabled={
                  !this.state.location.valid ||
                  !this.state.image.valid ||
                  this.state.placeName.trim() === ""
                }
              >
                Share the Place
              </ButtonWithBG>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 8
  }
});

const dispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, location, image) =>
      dispatch(addPlace(placeName, location, image))
  };
};

export default connect(
  null,
  dispatchToProps
)(SharePlaceScreen);
