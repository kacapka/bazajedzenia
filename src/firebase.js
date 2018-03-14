import * as firebase from 'firebase';
let Database;
let Firebase;

export const init = () => {
    
    const config = {
        apiKey: "AIzaSyBSkrew4UHexlbviDz4GTtOBVHYJOcS-CQ",
        authDomain: "bazajedzenia-abb0a.firebaseapp.com",
        databaseURL: "https://bazajedzenia-abb0a.firebaseio.com",
        projectId: "bazajedzenia-abb0a",
        storageBucket: "bazajedzenia-abb0a.appspot.com",
        messagingSenderId: "249021328086"
    }
    
    Firebase = firebase.initializeApp(config);
    Database = firebase.database();
    
}

export const fetchCornersDB = (path) => {
    return Database.ref(path).once('value');
}

export const setAuthStateChange = () => {
    return Firebase.auth();
}

export const addCommentDB = (comment, id) => {
    return new Promise((resolve, reject) => {
        Database.ref(`comments/${id}`).push(comment)
            .then(res => {resolve(res)})
            .catch(error => {reject(error)})
    })
}

export const getCommentsDB = id => {
    return Database.ref(`comments/${id}`);
} 




