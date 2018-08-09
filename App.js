import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./AppNavigator";
import configureStore from "./src/store/configureStore";

import NavigationService from "./NavigationService";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
