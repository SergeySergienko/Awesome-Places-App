import React from "react";
import { createDrawerNavigator } from "react-navigation";
import DrawerScreen_1 from "./src/screens/DrawerScreen_1";
import DrawerScreen_2 from "./src/screens/DrawerScreen_2";
import AuthScreen from './src/screens/AuthScreen';

import { Icon } from "react-native-elements";

const DrawerNavigator = createDrawerNavigator(
  {
    Auth: AuthScreen,
    Drawer_1: DrawerScreen_1,
    Drawer_2: DrawerScreen_2
  },
  {
    initialRouteName: "Auth",
    drawerPosition: 'right',
    drawerWidth: 200,
    drawerBackgroundColor: '#eee',
  }
);

export default DrawerNavigator;