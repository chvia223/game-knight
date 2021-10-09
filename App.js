import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { KeyBoardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, {} from './screens/login.js';
import Feed from './screens/feed.js';
import Profile from './screens/profile.js';
import Following from './screens/following.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown: false}} name="Following" component={Following}/>
        <Stack.Screen options={{headerShown: false}} name="Feed" component={Feed} />
        <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;