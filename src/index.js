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

var alaramParams = "";

if (window.location.search.indexOf("?") > -1) {
  alaramParams = decodeURIComponent(window.location.search.substr(window.location.search.indexOf("?") + 1));
}

try {
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
                  <App login_token={token} alaramParams={alaramParams} />
                </React.StrictMode>,
                document.getElementById("root")
              );
            } else {
              ReactDOM.render(
                <React.StrictMode>
                  <Login login_token={token} alaramParams={alaramParams} />
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
      alert("hicss.co.kr:3000의 알람 설정을 허용으로 변경해주세요.");
      console.log("fcm error : ", err);
    });
} catch {
  console.log("local storage :: " + localStorage.user_emp_id);
  // ios인 경우 현재 토큰을 사용하지 못하므로 localStorege를 이용하여 로그인 처리한다.
  if (localStorage.user_emp_id !== "" && localStorage.user_emp_id !== undefined) {
    ReactDOM.render(
      <React.StrictMode>
        <App user_emp_id={localStorage.user_emp_id} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
