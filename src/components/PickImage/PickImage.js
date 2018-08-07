import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ButtonWithBG from "../UI/ButtonWithBG";
// import imagePlaceholder from '../../assets/pic_3.jpg';
import { ImagePicker } from "expo";
// import ImagePicker from "react-native-image-picker";

class PickImage extends React.Component {
  state = {
    pickedImage: null
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    // console.log(result);

    if (!result.cancelled) {
      this.setState({
        pickedImage: { uri: result.uri }
      });
      this.props.onImagePicked({ uri: result.uri, base64: result.data });
    }
  };

  // This method is used for ImagePicker from react-native-image-picker library
  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      {
        title: "Pick an Image"
      },
      res => {
        if (res.didCancel) {
          console.log("User canceled!");
        } else if (error) {
          console.log("Error", res.error);
        } else {
          this.setState({
            pickedImage: { uri: res.uri }
          });
          this.props.onImagePicked({ uri: res.uri, base64: res.data });
        }
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <ButtonWithBG
            backgroundColor="#29aaf4"
            onPress={this._pickImage}
          >
            Pick Image
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
  placeholder: {
    borderWidth: 1,
    backgroundColor: "#ccc",
    width: "80%",
    height: 200
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 8
  }
});

export default PickImage;
