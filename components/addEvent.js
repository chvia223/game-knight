import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'

export default function AddEvent({ setModalOpen }) {

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => setModalOpen(true)}
        >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginTop: 'auto',
        alignItems: 'flex-end',
        borderWidth: 0.2,
        borderColor: 'grey',
        borderRadius: 40,
        marginRight: 10,
        marginBottom: 20,
        shadowColor: 'grey',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2
        
    },
    buttonText: {
        fontSize: 40,
        paddingBottom: 8,
        paddingTop: 1,
        paddingLeft: 16,
        paddingRight: 15,
        color: 'skyblue'
    },
    maroonBackground: {
        backgroundColor: "#8C2B3D"
    },
    maroonColor: {
        color: "#8C2B3D"
    },
    pinkBackground: {
        backgroundColor: "#F272B8"
    },
    pinkColor: {
        color: "#F272B8"
    },
    lightBlueBackground: {
        backgroundColor: "#85E7F2"
    },
    lightBlueColor: {
        color: "#85E7F2"
    },
    blueBackground: {
        backgroundColor: "#5FCDD9"
    },
    blueColor: {
        color: "#5FCDD9"
    },
    darkBlueBackground: {
        backgroundColor: "#037F8C"
    },
    darkBlueColor: {
        color: "#037F8C"
    },
});