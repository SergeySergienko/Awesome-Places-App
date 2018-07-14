import { createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation";
import AuthScreen from "./src/screens/AuthScreen";
import PlaceScreen from "./src/screens/PlaceScreen";
import TabNavigator from "./TabNavigator";

export default createStackNavigator(
  {
    Auth: AuthScreen,
    Tabs: TabNavigator,
    Place: PlaceScreen
  },
  {
    initialRouteName: "Auth",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "green"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
