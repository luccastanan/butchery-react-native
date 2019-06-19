import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import CPButton from "../components/CPButton";
import CPContainer from "../components/CPContainer";

export default class LoginScreen extends React.Component {

    state = {
        email: '',
        pass: ''
    }

    render() {
        return (
            <CPContainer center>
                <Input
                    placeholder='E-mail'
                    onChangeText={emailValue => this.setState({ email: emailValue })}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    value={this.state.email}
                />
                <Input 
                    placeholder='Senha' 
                    onChangeText={passValue => this.setState({ pass: passValue })} 
                    secureTextEntry 
                    value={this.state.pass}
                />
                <CPButton title='Logar' onPress={this.goHome}/>
            </CPContainer>
        );
    }

    goHome = () => {
        this.props.navigation.navigate('HomeScreen', { email: this.state.email });
    }
}