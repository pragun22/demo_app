// import * as functions from 'firebase-functions'; 
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.Trigger = functions.database.ref('User/{uid}/name').onWrite((snapshot, context)=>{
    let newcnt = snapshot.val().comcnt + 1;
    if (newcnt == 5){
        db.ref('/Comment').orderByChild("userid").equalTo(val.userid).once("child_added", comdata => {
            console.log(comdata.val());
            var loop_count = 0;
            //since this is the first data and data are added on basis of time so directly delete it
            comdata.ref.remove();
        })
        newcnt = 4;
    }
    snapshot.ref.update({comcnt: newcnt});
});