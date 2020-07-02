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

//var axios = require("axios");

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

    function test() {
      // axios
      //   .get("http://192.168.3.59:8080/mhicssPwaIdPwChk.hi?&device_uuid=" + this.props.login_token)
      //   .then((response) => {
      //     if (response.data.errorMsg !== "") {
      //       alert(response.data.errorMsg);
      //     } else {
      //     }

      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      return "eQJCcdXts1ncjtN0krn30g:APA91bGOBqR_XqsziKQ5FPQ-EGpgs2YE2zcQvZoK9gpQTU9cQCg4VZENaDicDKlo9k1I2k3VBtyxGnKxci-sWWTzhScZhKYXJl6hKN1aJoVtaaLKLsKgo_A1yAFD76yYKSPjOQM6uz67";
    }

    // 아래의 조건 절에 토큰 체크한 결과를 넣을 것.
    if (token === test()) {
      ReactDOM.render(
        <React.StrictMode>
          <App login_token={token} />,
        </React.StrictMode>,
        document.getElementById("root")
      );
    } else {
      ReactDOM.render(
        <React.StrictMode>
          <Login login_token={token} />,
        </React.StrictMode>,
        document.getElementById("root")
      );
    }
  })
  .catch(function (err) {
    console.log("fcm error : ", err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
