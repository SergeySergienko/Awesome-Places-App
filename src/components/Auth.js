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
import validate from "../utility/validation";

export default class Auth extends React.Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
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
  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      // const equalControl = 'password';
      // const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,

          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },

          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { email, password, confirmPassword } = this.state.controls;
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
              <DefaultInput
                placeholder="Email"
                style={styles.input}
                value={email.value}
                onChangeText={val => this.updateInputState("email", val)}
                valid={email.valid}
                touched={email.touched}
              />
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
                  <DefaultInput
                    placeholder="Password"
                    style={styles.input}
                    value={password.value}
                    onChangeText={val => this.updateInputState("password", val)}
                    valid={password.valid}
                    touched={password.touched}
                  />
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
                    value={confirmPassword.value}
                    onChangeText={val =>
                      this.updateInputState("confirmPassword", val)
                    }
                    valid={confirmPassword.valid}
                    touched={confirmPassword.touched}
                  />
                </View>
              </View>
            </View>
            <ButtonWithBG
              backgroundColor="#ff00aa"
              onPress={() => navigate("Tabs")}
              disabled={
                !email.valid || !password.valid || !confirmPassword.valid
              }
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
    fontWeight: "800"
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
