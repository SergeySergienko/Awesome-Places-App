import React from "react";
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Image } from "react-native";
import PlaceInput from "../components/PlaceInput/PlaceInput";
import { connect } from "react-redux";
import { addPlace } from "../store/actions/index";
import PickImage from '../components/PickImage/PickImage';
import PickLocation from '../components/PickLocation/PickLocation';
// import DefaultInput from '../components/UI/DefaultInput';
import ButtonWithBG from '../components/UI/ButtonWithBG';
import MainText from '../components/UI/MainText';
import HeadingText from '../components/UI/HeadingText';
import imagePlaceholder from '../assets/pic_1.jpg';

class SharePlaceScreen extends React.Component {
  placeAddHandler = placeName => {
    this.props.onAddPlace(placeName);
    this.props.navigation.navigate('Find');
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share the place with us</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput placeAddHandler={this.placeAddHandler} />
          <View style={styles.button}>
           <ButtonWithBG backgroundColor='#ff00aa'>Share the Place</ButtonWithBG>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    backgroundColor: '#ccc',
    width: '80%',
    height: 200,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    margin: 8,
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
