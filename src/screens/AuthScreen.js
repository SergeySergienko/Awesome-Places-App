import React from "react";
import { Button } from "react-native";
import Auth from "../components/Auth";

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: "Auth Page",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="white"
      />
    )
  };

  render() {
    return <Auth navigation={this.props.navigation} />;
  }
}
