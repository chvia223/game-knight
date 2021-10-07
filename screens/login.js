import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native'

const Login = () => {
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <Text>Login Screen</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Email" 
                // value={ } 
                // onChangeText={text => }
                style={styles.input}
                >
                </TextInput>
                <TextInput
                placeholder="Password" 
                // value={ } 
                // onChangeText={text => }
                style={styles.input}
                secureTextEntry
                >
                </TextInput>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
