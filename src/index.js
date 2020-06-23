import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
//import ChkToken from './ChkToken';
import * as serviceWorker from './serviceWorker';

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

// function PageRouting(props) {
//    var strToken = <ChkToken />;

//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn ==='33333333333333') {
//     return <App />;
//   }
//   return <Login />;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <PageRouting  isLoggedIn={'1'}/>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

var axios = require('axios');
//http://192.168.3.53:8090/mhicssUserValidationChk.hi
var messaging = firebase.messaging();
messaging.requestPermission()
  .then(function () {
    return messaging.getToken();
  })
  .then(function (token) {
    console.log('==========================================================================');
    console.log('token', token);
    console.log('==========================================================================');

    // 아래의 조건 절에 토큰 체크한 결과를 넣을 것.
    if (token === 'cGMMkxbNfP5Cn3qMcB3UcB:APA91bE3rZyUzpYYAXiMOwAsKH6v1l9axQ4FxruKWL9VhBJ3iuX5GM31K-N2ecgGrww1oajbFSKS32JGOngTTOkdQyYb6VTlT17juH7gsm0jCo-N5wATBjPrGa21mDG59xhUxvznAIxV') {
      ReactDOM.render(
        <React.StrictMode>
          <App />,
            </React.StrictMode>,
        document.getElementById('root')
      );
    } else {
      ReactDOM.render(
        <React.StrictMode>
          <Login />,
            </React.StrictMode>,
        document.getElementById('root')
      );
    }
  })
  .catch(function (err) {
    console.log('fcm error : ', err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();