import React, { Component, Fragment } from 'react'; 
import './App.css';
import firebase from 'firebase';
//import App from './App';

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
  
  var messaging = firebase.messaging();
  messaging.requestPermission()
    .then(function() {
        return messaging.getToken(); 
    })
    .then(function(token) {
        console.log('token', token);
    })
    .catch(function(err) {
        console.log('fcm error : ', err);
    })

  messaging.onTokenRefresh(() => {
     messaging.getToken().then((refreshedToken) => {
        console.log('refreshedToken', refreshedToken);
     }).catch((err) => {
       console.log('Unable to retrieve refreshed token ', err);
     });
  });

  messaging.onMessage(function(payload){
    console.log(payload.notification.title);
    console.log(payload.notification.body);
 })

//function App() {   iuujhkjhn
class App extends Component {
  bottomClick(e) {
    document.getElementById("ifweb").src = 'http://192.168.3.59:8080/mhicssGateway.hi?token=bJpO7rrqoGowhdaNk+i8gA==&target='+e;
  }
  
  render() {
    return (
      <Fragment>
        <div id="" className="top_area">
        </div>
        <iframe id="ifweb" width="100%" height="500px" title="gw" src="http://192.168.3.59:8080/mhicssGateway.hi?token=bJpO7rrqoGowhdaNk+i8gA==&target=main"></iframe>
        <div id="" className="bottom_area">
          <ul>
            <li onClick={() => this.bottomClick('main')}>
              <span className="alert_icon" id="alert2"></span>
              <span>홈</span>
            </li>
            <li onClick={() => this.bottomClick('approval')}>
              <span className="alert_icon" id="alert4"></span>
              <span>결재</span>
            </li>
            <li onClick={() => this.bottomClick('board')}>
              <span className="alert_icon" id="alert3"></span>
              <span>게시판</span>
            </li>
            <li onClick={() => this.bottomClick('organ')}>
              <span className="alert_icon" id="alert5"></span>
              <span>조직도</span>
            </li>
            <li onClick={() => this.bottomClick('logout')}>
              <span className="alert_icon" id="alert5"></span>
              <span>로그아웃</span>
            </li>
          </ul>
        </div>
       </Fragment>
    );
  }
}



export default App;
