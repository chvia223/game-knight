import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core';

export default function Header({ toProfile, toFollowing }) {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View
                style={styles.threadIcon} 
            >
            </View>
            <Image
            source={require('../assets/Asset_12x.png')}
            resizeMode="contain"
            style={styles.logo}
            />
            <TouchableOpacity
                style={[styles.profileIcon, styles.pinkBackground]} 
                onPress={toProfile}
            >
                <Text style={styles.iconText}>#</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 18,
        paddingTop: 5
    },
    profileIcon: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 5,
        padding: 8
    },
    threadIcon: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 5,
        padding: 8,
    },
    iconText: {
        fontWeight: 'bold',
        fontSize: 15,
        // textShadowColor: 'grey',
        // textShadowOffset: {width: -1, height: 1},
        // textShadowRadius: 10
    },
    logo: {
        width: 225,
        height: 45
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