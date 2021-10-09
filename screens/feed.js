import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddEvent from '../components/addEvent';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, getEvents } from '../config/firebase';

const Feed = () => {

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    const toFollowing = () => {
        navigation.replace("Following")
    }

    const [modalOpen, setModalOpen] = useState(false);

    const [todos, setTodos] = useState(getEvents())
    
    // const [todos, setTodos] = useState(getEvents());

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }

    // const submitHandler = (text) => {
    //     if(text.length > 3){
    //         setTodos((prevTodos) => {
    //             return [
    //                 { text: text, key: Math.random().toString() },
    //                 ...prevTodos
    //             ];
    //         });
    //     } else {
    //         Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
    //             {text: 'Understood', onPress: () => console.log('alert closed')}
    //         ])
    //     }
    // }

    

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
        }}>
            <View style={styles.container}>
                
                <Modal 
                    style={{justifyContent: 'center',
                            alignItems: 'center'}}
                    visible={modalOpen} 
                    animationType='slide'
                    transparent
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            onPress={() => setModalOpen(false)}
                        >
                            <MaterialIcons
                                name='close'
                                size={24}
                                
                            />
                        </TouchableOpacity>
                    </View>            
                </Modal>

                <Header toProfile={toProfile} toFollowing={toFollowing}/>

                <View style={styles.content}>
                    
                    <View style={styles.list}>
                        <FlatList 
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem item={item} pressHandler={pressHandler} />
                            )}
                        />
                    </View>
                    
                </View>

                <AddEvent setModalOpen={setModalOpen}/>
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
        paddingHorizontal: 20,
    },
    modalContent: {
        marginHorizontal: '10%',
        marginVertical: '30%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 0,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 5
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
});

export default Feed