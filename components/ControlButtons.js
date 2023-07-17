import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Physics from '../physics';

import React, { Component } from 'react'
rightMario = () => {

}
leftMario = () => {

}
export default class ControlButtons extends Component {

    
    render() {
        return (
            <View>
                <View style={styles.controlButtons}>
                    <View style={styles.upperButton}>

                        <TouchableOpacity style={styles.btn} />

                    </View>
                    <View style={styles.lowerBUttons}>

                        <TouchableOpacity onPress={this.leftMario} style={styles.btn} />
                        <TouchableOpacity onPress={this.rightMario} style={styles.btn} />

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    btn: {
        height: 80,
        width: 80,
        backgroundColor: "blue",
        borderRadius: 10,
        margin: 2,
    },
    controlButtons: {
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 200,
        height: 200,
        flexDirection: 'column',
    },

    upperButton: {
        width: 200,
        height: 100,
        alignItems: 'center',
    },
    lowerBUttons: {
        width: 200,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    },
});
