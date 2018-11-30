import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAahDvJu65We4wfzYjBoDJyI2UTkUnc7L0",
    authDomain: "kid-friendly-5e978.firebaseapp.com",
    databaseURL: "https://kid-friendly-5e978.firebaseio.com",
    projectId: "kid-friendly-5e978",
    storageBucket: "kid-friendly-5e978.appspot.com",
    messagingSenderId: "508453676194"
};

firebase.initializeApp(config);

export default firebase;
