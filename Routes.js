import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";

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
    },
    ProductScreen: {
        screen: ProductScreen,
        navigationOptions: {
            title: 'Produto'
        }
    }
});

export default createAppContainer(AppNavigator);

