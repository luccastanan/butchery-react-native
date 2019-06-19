import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class CPContainer extends Component {
    render() {
        return (
            <View style={this.props.center ? localStyles.centerContainer : localStyles.container}>
                {this.props.children}
            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
