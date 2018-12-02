import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAt7sYyT1HYlGv1R0WtRQi3Y8pekLFbL8Q",
    authDomain: "kid-friendly-2.firebaseapp.com",
    databaseURL: "https://kid-friendly-2.firebaseio.com",
    projectId: "kid-friendly-2",
    storageBucket: "kid-friendly-2.appspot.com",
    messagingSenderId: "174583865841"
};

firebase.initializeApp(config);


export default firebase;
