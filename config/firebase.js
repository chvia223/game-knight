// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTVq0g-6yaO8mDPITeAySuAcAYcv4dRI",
  authDomain: "gamenight-6543f.firebaseapp.com",
  projectId: "gamenight-6543f",
  storageBucket: "gamenight-6543f.appspot.com",
  messagingSenderId: "210684948728",
  appId: "1:210684948728:web:99de22978f037600d94b0d",
  measurementId: "G-B9WZ9HJKTF"
};

// Initialize Firebase
let app;
const initializeApp = () => {
  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  }
  else {
      app = firebase.app()
  }
}
initializeApp();

const auth = firebase.auth()

const addEvent = (title, description, daysTillEvent, location) => {
  let filepath = `events/${title.toLowerCase()}`
  let chatFilepath = `EventChats/${title.toLowerCase()}`;
  let body = {
    Description: description,
    Date: Date.now() + (daysTillEvent * 86400000),
    Location: location,
    Creator: `${auth.currentUser?.email}`
  }
  firebase.database().ref(filepath).set(body);
  firebase.database().ref(chatFilepath).set({
    Created: Date.now(),
    Chat: {
      Message: {
        Author: `The Game Knights Development Team`,
        Content: `Welcome to the ${title} group chat. Feel free to message eachother here about your plans for the event.`
      }
    }
  });
}




const getEvent = title => {
  var contents;
  let filepath = 'events/';
  firebase.database().ref(filepath).on('value', value => {
    contents = value.val();
  });
  if (contents === null || contents === undefined) {
    console.error("Unable to find item: " + title);
    return{}
  }
  return contents[`${title.toLowerCase()}`]
}


const getEvents = function() {
  if (firebase.apps.length === 0) {
    initializeApp();
  }
  var contents;
  let filepath = 'events/';
  app.database().ref(filepath).on('value', value => {
    contents = value.val();
  });
  if (contents === undefined || contents === null) {
    setTimeout(getEvents, 300);
  }
  let events = [];
  let counter = 0;
  for (const key in contents) {
    counter++;
    events.push({
      key: counter.toString(), 
      text: key,
      Creator: contents[key].Creator,
      Date: contents[key].Date,
      Description: contents[key].Description,
      Location: contents[key].Location
    });
  }
  return events;
}

const getChat = (chat) => {
  var contents;
  let filepath = `EventChats/${chat}/Chat/`;
  firebase.database().ref(filepath).on('value', value => {
    contents = value.val();
  });
  if (contents === null || contents === undefined) {
    return [{
      Author: 'The Game Knights Development Team', 
      Message: "It looks like you aren't following any events right now! Try Following one in your feed!"
    }]
  }
  let messages = []
  // console.log("jeremy")
  let counter = 0;
  for (const key in contents) {
    messages.push(contents[key])
  }
  return messages
} 


// // this function workd!
const addMessage = (message, title, author) => {
  let time = Date.now()
  let chatkeyfilepath = `EventChats/${title.toLowerCase()}/Chat/${time}`;
  firebase.database().ref(chatkeyfilepath).set(time);
  let chatfilepath = `EventChats/${title.toLowerCase()}/Chat/${time}`;
  let body = {
    Author: author,
    text: message,
    key: time,
  }
  firebase.database().ref(chatfilepath).set(body);
}

const followEvent = (event) => {
  let filepath = `Following/${auth.currentUser?.uid}/`;
  let body = {
    Following: event.toLowerCase(),
  }
  firebase.database().ref(filepath).set(body);
}

const getFollowedEvent = () => {
  let filepath = `Following/${auth.currentUser?.uid}/`;
  var followedEvent;
  firebase.database().ref(filepath).on('value', (event) => {
    followedEvent = event;
  })
  if (followedEvent === null || followedEvent === undefined) {
    return 'default';
  }
  return followedEvent.Following;
}



// addEvent("Testing2", "This is such a cool event you all should come", 1000000000, "My House");

// console.log(getEvent("testing2").Creator);

// getChat("testing2").forEach(value => {console.log(value)})



export { auth, addEvent, getEvent, getEvents, getChat, addMessage, followEvent, getFollowedEvent, };