import { createStackNavigator } from "react-navigation";
import AuthScreen from "./src/screens/AuthScreen";
import PlaceScreen from "./src/screens/PlaceScreen";
import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";
import PlaceDetailScreen from "./src/screens/PlaceDetailScreen";

export default createStackNavigator(
  {
    // Auth: AuthScreen,
    Tabs: TabNavigator,
    // Place: PlaceScreen,
    Detail: PlaceDetailScreen,
    Drawer: DrawerNavigator
  },
  {
    initialRouteName: "Drawer",
    // headerMode: 'none',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
