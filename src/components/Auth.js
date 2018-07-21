import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import DefaultInput from "./UI/DefaultInput";
import HeadingText from "./UI/HeadingText";
import MainText from "./UI/MainText";
import ButtonWithBG from "./UI/ButtonWithBG";
import backgroundImage from "../assets/pic_1.jpg";

export default class Auth extends React.Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }
  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    let headingText = null;
    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            {headingText}
            <ButtonWithBG
              backgroundColor="#29aaf4"
              onPress={() => alert("Hello")}
            >
              Switch to Login
            </ButtonWithBG>
            <View style={styles.inputContainer}>
              <DefaultInput placeholder="Email" style={styles.input} />
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordContainer
                    : styles.landscapePasswordContainer
                }
              >
                <View
                  style={
                    this.state.viewMode === "portrait"
                      ? styles.portraitPasswordWrapper
                      : styles.landscapePasswordWrapper
                  }
                >
                  <DefaultInput placeholder="Password" style={styles.input} />
                </View>
                <View
                  style={
                    this.state.viewMode === "portrait"
                      ? styles.portraitPasswordWrapper
                      : styles.landscapePasswordWrapper
                  }
                >
                  <DefaultInput
                    placeholder="ConfirmPassword"
                    style={styles.input}
                  />
                </View>
              </View>
            </View>
            <ButtonWithBG
              backgroundColor="#ff00aa"
              onPress={() => navigate("Tabs")}
            >
              Submit
            </ButtonWithBG>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    // borderColor: 'red',
    height: 605
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#555",
    fontWeight: "800",
    color: "red"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});
