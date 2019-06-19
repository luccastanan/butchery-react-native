import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";
import NewProductScreen from "./src/screens/NewProductScreen";

const LoginNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    }
})

const AppNavigator = createStackNavigator({
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
    },
    NewProductScreen: {
        screen: NewProductScreen,
        navigationOptions: {
            title: 'Cadastrar Produto'
        }
    }
    
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:'#2c3e50'
        },
        headerTitleStyle: {
            color:'white'
        },
        headerTintColor: 'white'
    }
});

const MainSwitch = createSwitchNavigator({
    LoginNavigator,
    AppNavigator
})

export default createAppContainer(MainSwitch);

