import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Input } from "react-native-elements";

export default class LoginScreen extends React.Component {
    
    render(){
        return (
            <View style={styles.container}>
                <Input placeholder='E-mail'/>
                <Input placeholder='Senha' secureTextEntry/>
                <TouchableOpacity style={styles.button} onPress={this.goHome}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    goHome = () => {
        this.props.navigation.navigate('HomeScreen');
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    button: {
        backgroundColor:'#8e44ad',
        padding:16,
        borderRadius: 30
    },
    buttonText: {
        color:'white',
        fontSize: 16
    }
});