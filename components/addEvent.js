import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { Formik } from 'formik';

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
        marginRight: 20,
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
    }
});