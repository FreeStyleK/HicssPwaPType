import React, {Component} from 'react'; 
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZym0NWWd8hQVexB80HRyyVCyct5O0ybA",
    authDomain: "pwa-push-test-3b4db.firebaseapp.com",
    databaseURL: "https://pwa-push-test-3b4db.firebaseio.com",
    projectId: "pwa-push-test-3b4db",
    storageBucket: "pwa-push-test-3b4db.appspot.com",
    messagingSenderId: "389857827152",
    appId: "1:389857827152:web:5ec1e131357cc0f9c1f455",
    measurementId: "G-8NX3YHFK90"
  };

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //   var messaging = firebase.messaging();
  //  messaging.requestPermission()
  //   .then(function() {
  //       return messaging.getToken(); 
  //   })
  //   .then(function(token) {
  //       console.log('==========================================================================');
  //       console.log('token', token);
  //       console.log('==========================================================================');
  //   })
  //   .catch(function(err) {
  //       console.log('fcm error : ', err);
  //   });

//   messaging.onTokenRefresh(() => {
//      messaging.getToken().then((refreshedToken) => {
//         console.log('refreshedToken', refreshedToken);
//      }).catch((err) => {
//        console.log('Unable to retrieve refreshed token ', err);
//      });
//   });

//   messaging.onMessage(function(payload){
//     console.log(payload.notification.title);
//     console.log(payload.notification.body);
//  })

var getGenres = function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var messaging = firebase.messaging();
      messaging.requestPermission()
        .then(function () {
          return messaging.getToken();
        })
        .then(function (token) {
          console.log('==========================================================================');
          console.log('token', token);
          console.log('==========================================================================');
          //return token;
          resolve(token);
        })
        .catch(function (err) {
          console.log('fcm error : ', err);
        });
    }, 1);
  });
}

var result =   getGenres()
result.then(function(token) {
  console.log("[TOKEN] ::::: ", token);
})

/////////////////////////////////////////////////////////////////////////

class ChkToken extends Component{
}

export default ChkToken;

