import * as firebase from 'firebase';
let Database;
let Firebase;
let Storage;

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
    Storage = firebase.storage();
    
}

export const uiConfig = () => ({
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
});

export const fetchCornersDB = (path) => {
    return Database.ref(path).once('value');
}

export const fetchCornerByIdDB = (id) => {
    return Database.ref(`cornersBYID/${id}`).once('value');
}

export const setAuthStateChange = () => {
    return Firebase.auth();
}

export const logOut = () => {
    Firebase.auth().signOut();
}

export const addCommentDB = (comment, id) => {
    return new Promise((resolve, reject) => {
        Database.ref(`comments/${id}`).push(comment)
            .then(res => {resolve(res)})
            .catch(error => {reject(error)})
    })
}

export const fetchCommentsDB = id => {
    return Database.ref(`comments/${id}`);
}

export const fetchPhotoSB = (path) => {
    return Storage.ref('images/' + path + '.jpeg').getDownloadURL();
}





