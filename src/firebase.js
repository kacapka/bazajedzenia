import * as firebase from 'firebase';
let database = window.database;

export const init = () => {
    
    const config = {
        apiKey: "AIzaSyBSkrew4UHexlbviDz4GTtOBVHYJOcS-CQ",
        authDomain: "bazajedzenia-abb0a.firebaseapp.com",
        databaseURL: "https://bazajedzenia-abb0a.firebaseio.com",
        projectId: "bazajedzenia-abb0a",
        storageBucket: "bazajedzenia-abb0a.appspot.com",
        messagingSenderId: "249021328086"
    }
    
    firebase.initializeApp(config);
    database = firebase.database();
    
}



