import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ProductScreen extends Component {

    constructor(props){
        super(props)
        this.product = props.navigation.getParam('product', null);
    }

    render(){
        return(
            <View>
                <Text>{this.product.name}</Text>
                <Text>{this.product.price}</Text>
            </View>
        );
    }
}