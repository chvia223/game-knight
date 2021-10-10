import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core';

export default function Header({ toProfile, toFollowing, Title }) {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.threadIcon}
                onPress={toFollowing}
            >
                {/* Event Threads Button */}
                <Text style={styles.iconText}>#</Text>
            </TouchableOpacity>
            <Image
            source={require('../assets/Asset_12x.png')}
            resizeMode="contain"
            style={styles.logo}
            />
            <TouchableOpacity
                style={styles.profileIcon} 
                onPress={toProfile}
            >
                <Text style={styles.iconText}>:D</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#333',
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
        backgroundColor: 'white',
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
        height: 45,
        flex: 10
    }
});