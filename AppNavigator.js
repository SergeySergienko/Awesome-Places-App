import { createStackNavigator } from "react-navigation";
import AuthScreen from "./src/screens/AuthScreen";
import PlaceScreen from "./src/screens/PlaceScreen";
import TabNavigator from "./TabNavigator";
import PlaceDetailScreen from "./src/screens/PlaceDetailScreen";

export default createStackNavigator(
  {
    Auth: AuthScreen,
    Tabs: TabNavigator,
    // Place: PlaceScreen,
    Detail: PlaceDetailScreen
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
