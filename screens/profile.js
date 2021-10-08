import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from '../config/firebase'

const Profile = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
        .catch(err => {
            alert(err.message)
        })
    };

    return (
        <View>
            <Text>auth.currentUser?.email</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
