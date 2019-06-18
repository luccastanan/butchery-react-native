import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default class HomeScreen extends Component {

    state = {
        products: []
    }

    render() {
        return (
            <View style={localStyles.container}>
                <Text>{this.props.navigation.getParam('email', 'NÃO ENCONTROU')}</Text>
                <FlatList
                    data={this.state.products}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={localStyles.itemContainer} onPress={() => this.goProduct(item)}>
                            <View style={localStyles.item}>
                                <Text style={localStyles.name}>{item.name}</Text>
                                <Text style={localStyles.price}>R${item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        );
    }

    goProduct = prod => {
        this.props.navigation.navigate('ProductScreen', { product: prod});
    }

    componentDidMount() {
        fetch('http://192.168.140.203:2019')
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

const localStyles = StyleSheet.create({
    container: {
        flex:1
    },
    itemContainer:{
        padding: 8
    },
    item: {
        paddingVertical: 16,
        paddingHorizontal: 24, 
        borderRadius: 30,
        flexDirection:'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#8e44ad'
    },
    name: {
        color: 'white'
    },
    price:{
        color: 'white',
        fontWeight:'bold'
    }
});