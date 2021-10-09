import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../config/firebase'
import Header from '../components/profileHeader';

const Profile = () => {
    const navigation = useNavigation();

    const toFollowing = () => {
        navigation.replace("Following")
    }

    const toFeed = () => {
        navigation.replace("Feed")
    }

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
        .catch(err => {
            alert(err.message)
        })
    };

    return (
        <View style={[styles.page]}>
            <Header toProfile={toFeed} toFollowing={toFollowing} Title="Profile"/>
            <Text style = {[styles.spacing, styles.welcomeText]}>
                Welcome to Game Night! You are currently signed in as {auth.currentUser?.email}. Click Feed to view events in your area and click Following to look at the Chat Rooms for events in your area.
            </Text>
            <TouchableOpacity 
            style={[styles.centerContent, styles.followingButton, styles.spacing]} 
            onPress={toFollowing}
            >
                <Text>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
            onPress={toFeed}
            >
                <Text>Feed</Text>
            </TouchableOpacity>
            <Text>{auth.currentUser?.email}</Text>
            <TouchableOpacity
            style={[styles.logoutButton, styles.centerContent, styles.spacing]}
            onPress={handleSignOut}
            >
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    welcomeText: {
        marginTop: 25,
        padding: 40,
        justifyContent: 'center',
    },
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
    followingButton: {
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
