import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../config/firebase'

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
        <View style={[styles.page, styles.centerContent]}>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
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
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    page: {
        flex: 1,
        backgroundColor: 'gray',
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
    }
})
