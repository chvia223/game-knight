import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth, getEvent, getChat } from '../config/firebase'
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

        <View style={[styles.page, styles.lightBlueBackground]}>

        {/* <View style={styles.container}> */}

            <Header toProfile={toFeed} toFollowing={toFollowing} Title="Profile"/>
            <Text style = {[styles.spacing, styles.welcomeText]}>
                Welcome to Game Night! 
                You are currently signed in as {auth.currentUser?.email}. Click Feed to view events in your area and click Following to look at the Chat Rooms for events in your area.
            </Text>

            <TouchableOpacity 
            style={[styles.centerContent, styles.followingButton, styles.spacing, styles.darkBlueBackground]} 
            onPress={toFollowing}
            >
                <Text style={styles.whiteText}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing, styles.darkBlueBackground]} 
            onPress={toFeed}
            >
                <Text style={styles.whiteText}>Feed</Text>
            </TouchableOpacity>
            <Text>{auth.currentUser?.email}</Text>
            <TouchableOpacity
            style={[styles.logoutButton, styles.centerContent, styles.spacing, styles.darkBlueBackground]}
            onPress={handleSignOut}
            >
                <Text style={styles.whiteText}>Sign Out</Text>
            </TouchableOpacity>


            {/* <TouchableOpacity 
            style={[styles.centerContent, styles.followingButton, styles.spacing]} 
            onPress={toFollowing}
            >
                <Text>Following</Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity 
            style={[styles.centerContent, styles.feedButton, styles.spacing]} 
            onPress={toFeed}
            >
                <Text>Feed</Text>
            </TouchableOpacity> */}
            {/* <View style={styles.profileContainer}>
                <View style={styles.profileCard}>
                        <View style={styles.profilePic}>

                        </View>
                        
                        <Text style={styles.loggedInUser}>{auth.currentUser?.email}</Text>
                        <View style={styles.userBio}> 
                            <Text style={{fontWeight: 'bold', color: '#333', fontSize: 20}}>About</Text>
                        
                            <Text placeholder="Tell about yourself..." style={{color: 'white', paddingTop: 5, paddingLeft: 15}}>
                                #Tell about yourself...
                            </Text>
                        </View>
                        
                        
                        <TouchableOpacity
                        style={[styles.logoutButton, styles.centerContent, styles.spacing]}
                        onPress={handleSignOut}
                        >
                            <Text>Sign Out</Text>
                        </TouchableOpacity>
                </View>
            </View> */}

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
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logoutButton: {

        width: '60%',

        backgroundColor: '#0782F9',

        padding: 15,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center'
    },

    feedButton: {
        width: '60%',
        padding: 15,
        borderRadius: 10,
    },
    followingButton: {
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
    whiteText: {
        color: "#FFFFFF"
    },

    profileCard: {
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 48,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%' 
    },
    profilePic: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 25,
        padding: 46,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    userBio: {
        alignItems: 'flex-start',
        width: '90%',
        paddingBottom: 40
    },
    loggedInUser: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    }
})
