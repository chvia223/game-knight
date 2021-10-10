import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Header from '../components/threadHeader';
import { auth, getEvent, getChat, getFollowedEvent } from '../config/firebase'


const Following = () => {

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    const toFeed = () => {
        navigation.replace("Feed")
    }

    let chat = getChat(getFollowedEvent())
    console.log(chat)
                

    return (
        <View style={[styles.page]}>

            <Header toProfile={toFeed} toFollowing={toFeed} Title="Following"/>

            <View>
                {
                    chat.slice(0).reverse().map((event, index) => {
                        if (event.Author == auth.currentUser?.email) {
                            return (
                                <View key={index} style={styles.myMessage}>
                                    <Text style={{color: '#ffffff'}}>{event.Author} : {event.Content}</Text>
                                </View>
                            )
                        }
                        return (
                            <View key={index} style={styles.message}>
                                <Text>{event.Author} : {event.Content}</Text>
                            </View>
                        );
                    })
                }
            </View>
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
    message: {
        marginTop: 15,
        width: '65%',
        alignContent: 'flex-start',
        backgroundColor: '#037F8C',
        padding: 15,
        borderRadius: 10,
    },
    myMessage: {
        marginTop: 15,
        width: '65%',
        alignItems: 'flex-end',
        backgroundColor: '#8C2B3D',
        padding: 15,
        borderRadius: 10,
    }
})
