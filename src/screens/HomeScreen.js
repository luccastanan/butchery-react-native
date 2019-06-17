import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

export default class HomeScreen extends Component {

    state = {
        products: [
            {
                id: 1,
                name: 'Coxinha',
                price: 6.00
            }, {
                id: 2,
                name: 'Chocolate',
                price: 3.40
            }, {
                id: 3,
                name: 'Feijão',
                price: 5.40
            },
        ]
    }

    render() {
        return (
            <View>
                <FlatList 
                    data={this.state.products}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        );
    }
}