import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddEvent from '../components/addEvent';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, getEvents, followEvent } from '../config/firebase';

const Feed = () => {
    
    const navigation = useNavigation();
    
    const [followedEvents, setFollowedEvents] = useState([{
        key:'0', 
        text: "Looks like you aren't following any events!"
    }]);

    const toProfile = () => {
        navigation.replace("Profile", followedEvents)
    }

    const toFollowing = () => {
        navigation.replace("Following")
    }

    const [modalOpen, setModalOpen] = useState(false);

    const [todos, setTodos] = useState(getEvents());


    
    
    // const [todos, setTodos] = useState(getEvents());

    const pressHandler = (key) => {
        followEvent(key)
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
});

export default Feed