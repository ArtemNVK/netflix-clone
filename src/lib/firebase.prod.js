import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaknOw94MlyHkJ4FDdq8bVLqF4-c2FZKo",
    authDomain: "netflix-99d4c.firebaseapp.com",
    projectId: "netflix-99d4c",
    storageBucket: "netflix-99d4c.appspot.com",
    messagingSenderId: "723229617424",
    appId: "1:723229617424:web:5ca81b3721ff8ebc158995"
};

const firebase = Firebase.initializeApp(config);


export { firebase };