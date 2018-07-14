import { createBottomTabNavigator } from "react-navigation";
import SharePlaceScreen from "./src/screens/SharePlaceScreen";
import FindPlaceScreen from "./src/screens/FindPlaceScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Share: SharePlaceScreen,
    Find: FindPlaceScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNavigator;
