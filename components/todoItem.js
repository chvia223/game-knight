import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
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