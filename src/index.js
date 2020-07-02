import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import * as serviceWorker from "./serviceWorker";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZym0NWWd8hQVexB80HRyyVCyct5O0ybA",
  authDomain: "pwa-push-test-3b4db.firebaseapp.com",
  databaseURL: "https://pwa-push-test-3b4db.firebaseio.com",
  projectId: "pwa-push-test-3b4db",
  storageBucket: "pwa-push-test-3b4db.appspot.com",
  messagingSenderId: "389857827152",
  appId: "1:389857827152:web:5ec1e131357cc0f9c1f455",
  measurementId: "G-8NX3YHFK90",
};

var axios = require("axios");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(function () {
    return messaging.getToken();
  })
  .then(function (token) {
    console.log("==========================================================================");
    console.log("token", token);
    console.log("==========================================================================");

    //토큰 확인 후 있다면 해당 토큰으로 로그인
    function LoginCheck() {
      axios
        .get("https://hicss.co.kr/mhicssPwaAutoLoginChk.hi?&token=" + token)
        .then((response) => {
          console.log(response.data.result);
          if ("true" === response.data.result) {
            ReactDOM.render(
              <React.StrictMode>
                <App login_token={token} />
              </React.StrictMode>,
              document.getElementById("root")
            );
          } else {
            ReactDOM.render(
              <React.StrictMode>
                <Login login_token={token} />
              </React.StrictMode>,
              document.getElementById("root")
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    LoginCheck();
  })
  .catch(function (err) {
    console.log("fcm error : ", err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
