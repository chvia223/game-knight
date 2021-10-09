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
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

const containsValue = (directory, value) => {
  var contents;
  firebase.database().ref(directory).on('value', value => {
    contents = value.val();
  });
  for (const key in contents) {
    if (contents[key] === value) {
      return true;
    }
  }
  return false;
}

const getValue = (directory, key) => {
  var contents;
  firebase.database().ref(directory).on('value', value => {
    contents = value.val();
  });
  return contents[key]
}

const addEvent = (title, description, time, location) => {
  let filepath = `events/${title.toLowerCase()}`
  let chatFilepath = `EventChats/${title.toLowerCase()}`;
  let body = {
    Description: description,
    Date: time,
    Location: location,
    Creator: `${auth.currentUser?.email}`
  }
  firebase.database().ref(filepath).set(body);
  firebase.database().ref(chatFilepath).set({
    Created: Date.now(),
    Chat: {
      Message: {
        Author: `${auth.currentUser?.email}`,
        Content: `Welcome to the ${title} group chat. Feel free to message eachother here about your plans for the event.`
      }
    }
  });
}

const getEvent = (title) => {
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

const getMessage = (chat) => {
  var contents;
  let filepath = `EventChats/${chat}/Chat/`;
  firebase.database().ref(filepath).on('value', value => {
    contents = value.val();
  });
  if (contents === null || contents === undefined) {
    console.error("Unable to find item: " + chat);
    return{}
  }
  let messages = []
  // console.log("jeremy")
  for (const key in contents) {
    messages.push(contents[key])
  }
  return messages
  // return contents[`${chat.toLowerCase()}`]
} 



// this function workd!
const addMessage = (message, title, author) => {
  let time = Date.now()
  let chatkeyfilepath = `EventChats/${title.toLowerCase()}/Chat/${time}`;
  firebase.database().ref(chatkeyfilepath).set(time);
  let chatfilepath = `EventChats/${title.toLowerCase()}/Chat/${time}`;
  let body = {
    Author: author,
    Content: message,
  }
  firebase.database().ref(chatfilepath).set(body);
}

// addEvent("Testing2", "This is such a cool event you all should come", 1000000000, "My House");

// console.log(getEvent("testing2").Creator);


// getMessage("testing2").forEach(value => {console.log(value)})

// addMessage("Hello","testing2", "Jacob")

export { auth, addEvent, getEvent };