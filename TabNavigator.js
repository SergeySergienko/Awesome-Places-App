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
          <Icon name="share" color={focused ? "#fff" : "#29aaf4"} />
        ) : (
          <Icon name="search" color={focused ? "#fff" : "#29aaf4"} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#29aaf4",
      inactiveTintColor: "#29aaf4",
      inactiveBackgroundColor: "#fff",
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

export default TabNavigator;
