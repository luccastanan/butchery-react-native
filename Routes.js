import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

const AppNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    }
});

export default createAppContainer(AppNavigator);

