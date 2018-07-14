import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SearchBar } from "react-native-elements";

export default class Auth extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Auth Screen</Text>
        <View style={styles.search}>
          <SearchBar
            showLoading
            platform="android"
            placeholder="Search"
            lightTheme
          />
        </View>
        <Button title="Login" onPress={() => navigate("Tabs")} />
        <Button title="Go To Place Page" onPress={() => navigate("Place")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  search: {
    width: "100%"
  }
});
