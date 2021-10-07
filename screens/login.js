import React from 'react'
import { KeyBoardAvoidingView, StyleSheet, Text, View } from 'react-native'

const Login = () => {
    return (
        <KeyBoardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Email" 
                // value={ } 
                // onChangeText={text => }
                style={styles.input}
                />
                <TextInput 
                placeholder="Password" 
                // value={ } 
                // onChangeText={text => }
                style={styles.input}
                secureTextEntry
                />
            </View>
            <Text>Login Screen</Text>
        </KeyBoardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
