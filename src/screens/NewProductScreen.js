import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input } from "react-native-elements";
import CPContainer from '../components/CPContainer';
import CPButton from '../components/CPButton';

export default class NewProductScreen extends Component {
    state = {
        name: '',
        price: 0.00,
        priceValue: ''
    }
    render() {
        return (
            <CPContainer center>
                <Input
                    placeholder='Nome do produto'
                    onChangeText={nameValue => this.setState({ name: nameValue })}
                    value={this.state.name}
                />
                <Input
                    placeholder='Valor do produto'
                    keyboardType='decimal-pad'
                    onChangeText={priceValue => this.setState({ price: parseFloat(priceValue), priceValue })}
                    value={this.state.priceValue.toString()}
                />
                <CPButton title="Cadastrar" onPress={this.handleRegister} />
            </CPContainer>
        )
    }

    handleRegister = () => {
        fetch('http://192.168.140.203:2019', {
            method: 'post',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: this.state.name,
                price: this.state.price
            })
        })
            .then(res => {
                if (res.status != 200) {
                    console.log('Error: ' + res.json());
                    return;
                }
                return res.json();
            }).then(body => {
                this.setState({ products: body })
            })
    }
}
