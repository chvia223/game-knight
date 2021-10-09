import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from '../components/threadHeader';

const Following = () => {

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    const toFeed = () => {
        navigation.replace("Feed")
    }

    return (
        <View style={[styles.page]}>
            <Header toProfile={toFeed} toFollowing={toFeed} Title="Profile"/>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
            onPress={toProfile}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
            onPress={toFeed}
            >
                <Text>Feed</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Following

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    page: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
    },
    feedButton: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
    },
    spacing: {
        marginBottom: 15,
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
})
