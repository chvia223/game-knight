import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';

const Feed = () => {

    const navigation = useNavigation();

    const toProfile = () => {
        navigation.replace("Profile")
    }

    const toFollowing = () => {
        navigation.replace("Following")
    }

    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2'},
        { text: 'play on the switch', key: '3'}
    ])

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
// class App extends Component {
//     state = {
//       page: 0,
//       pageTwoFlex: 0,
//       pageThreeFlex: 0,
//     }
  
//     onPressProfile = () => {
//       let newPage;
//       let newPageTwo = this.state.pageTwoFlex;
//       let newPageThree = this.state.pageThreeFlex;
//       if (this.state.page !== 1) {
//         newPage = 1;
//         newPageTwo = 3;
//         newPageThree = 0;
//       }
//       else {
//         newPage = 0;
//         newPageTwo = 0;
//         newPageThree = 0;
//       }
//       this.setState({
//         page: newPage,
//         pageTwoFlex: newPageTwo,
//         pageThreeFlex: newPageThree,
//       })
//     }
  
//     onPressFollowing = () => {
//       let newPage;
//       let newPageTwo = this.state.pageTwoFlex;
//       let newPageThree = this.state.pageThreeFlex;
//       if (this.state.page !== 2) {
//         newPage = 2;
//         newPageTwo = 0;
//         newPageThree = 3;
//       }
//       else {
//         newPage = 0;
//         newPageTwo = 0;
//         newPageThree = 0;
//       }
//       this.setState({
//         page: newPage,
//         pageTwoFlex: newPageTwo,
//         pageThreeFlex: newPageThree,
//       })
//     }
  
//     styles = StyleSheet.create({
//       followingButton: {
//         position: 'relative',
//         height: 60,
//         width: 60,
//         backgroundColor: '#DDDDDD',
//         padding: 10,
//         margin: 10
//       },
//       profileButton: {
//         height: 60,
//         width: 60,
//         backgroundColor: '#DDDDDD',
//         padding: 10,
//         margin: 10,
//       },
    
//       container: {
//         flex: 1,
//         flexDirection: 'column',
//       },
//       pageOne: {
//         marginTop: 20,
//         backgroundColor: '#fff',
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         direction: 'inherit',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//       },
//       pageTwo: {
//         backgroundColor: '#CCCCCC',
//         borderRadius: 10,
//         flex: this.state.pageTwoFlex,
//       },
//       pageThree: {
//         backgroundColor: '#BBBBBB',
//         borderRadius: 10,
//         flex: this.state.pageThreeFlex,
//       },
      
//     });
  
//     render() {
//       let page;
//       if (this.state.page === 0) {
//         page = this.styles.pageOne;
//       } 
//       else if (this.state.page === 1) {
//         page = this.styles.pageTwo;
//       }
//       else if (this.state.page === 2) {
//         page = this.styles.pageThree;
//       }
//       return (
//         <View style={this.styles.pageOne}>
//           <View style={{
//             backgroundColor: '#CCCCCC',
//             borderRadius: 10,
//             flex: this.state.pageTwoFlex,
//             direction: 'rtl',
//             height: '100%',
//           }}>
//             <TouchableOpacity onPress={this.onPressProfile}>
//               <Text style={this.styles.profileButton}>profile {this.state.pageTwoFlex}</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{
//             backgroundColor: '#CCCCCC',
//             borderRadius: 10,
//             flex: this.state.pageThreeFlex,
//             direction: 'ltr',
//             height: '100%',
//           }}>
//             <TouchableOpacity onPress={this.onPressFollowing}>
//               <Text style={this.styles.followingButton}>following {this.state.pageThreeFlex}</Text>
//             </TouchableOpacity>
//           </View>
//           <StatusBar style="auto" />
//         </View>
//       );
//     }
//   }