import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import SharePlaceScreen from "./src/screens/SharePlaceScreen";
import FindPlaceScreen from "./src/screens/FindPlaceScreen";
import { Icon } from "react-native-elements";

const TabNavigator = createBottomTabNavigator(
  {
    Share: SharePlaceScreen,
    Find: FindPlaceScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        return routeName === "Share" ? (
          <Icon name="share" />
        ) : (
          <Icon name="search" />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNavigator;
