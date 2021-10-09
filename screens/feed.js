import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';
import { auth, getEvents } from '../config/firebase';

const Feed = () => {

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    const toFollowing = () => {
        navigation.replace("Following")
    }

    
    const [todos, setTodos] = useState(getEvents());

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }

    const submitHandler = (text) => {

        if(text.length > 3){
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos
                ];
            });
        } else {
            Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ])
        }
    }

    

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
        }}>
            <View style={styles.container}>
                <Header toProfile={toProfile} toFollowing={toFollowing}/>

                <View style={styles.content}>
                    <AddTodo submitHandler={submitHandler} />
                    <View style={styles.list}>
                        <FlatList 
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
    // input: {
    //     borderWidth: 1,
    //     borderColor: '#777',
    //     padding: 8,
    //     margin: 10,
    //     width: 200,
     
});

export default Feed