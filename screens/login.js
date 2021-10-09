import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native'
import { auth } from '../config/firebase'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            if (user) {
                navigation.replace("Profile")
            }
        })

        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                alert('You have successfully registered. Login to continue.')
                console.log('Registered with', user.email);
            }).catch(error => alert(error.message))
            
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with', user.email);
        }).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={text => setEmail(text)}
                style={styles.input}
                >
                </TextInput>
                <TextInput
                placeholder="Password" 
                value={password}  
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                >
                </TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress = {handleLogin}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {handleSignUp}
                style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderRadius: 10,
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})
