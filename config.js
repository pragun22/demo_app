import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyC2aMKtE_0zCzaaz-I7Ac5Pdt_clgp6KcM",
    authDomain: "internshala-demo-ratemysinginh.firebaseapp.com",
    databaseURL: "https://internshala-demo-ratemysinginh.firebaseio.com",
    projectId: "internshala-demo-ratemysinginh",
    storageBucket: "internshala-demo-ratemysinginh.appspot.com",
    messagingSenderId: "556992645302"
};
let app  = Firebase.initializeApp(config);
export const db = app.database();