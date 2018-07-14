import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./AppNavigator";
import configureStore from "./src/store/configureStore";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
