import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class CPButton extends Component {
    render() {
        return (
            <TouchableOpacity style={localStyles.button} onPress={this.props.onPress}>
                <Text style={localStyles.buttonText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const localStyles = StyleSheet.create({
    button: {
        backgroundColor: '#8e44ad',
        padding: 16,
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})

