import React from "react";
import { Button } from "react-native";
import Place from "../components/Place";

export default class PlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Place Page",
      headerLeft: (
        <Button
          onPress={() => navigation.goBack()}
          title="<-Back"
          color="green"
        />
      )
    };
  };
  render() {
    return <Place />;
  }
}
