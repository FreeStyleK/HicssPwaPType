import React, { Component, Fragment } from 'react'; 
import './App.css';

class App extends Component {
  bottomClick(e) {
    document.getElementById("ifweb").src = 'http://192.168.3.53:8090/mhicssGateway.hi?token=bJpO7rrqoGowhdaNk+i8gA==&target='+e;
  }
  
  render() {
    return (
      <Fragment>
        <div id="" className="top_area">
        </div>
        <iframe id="ifweb" width="100%" height="500px" title="gw" src="http://192.168.3.53:8090/mhicssGateway.hi?token=bJpO7rrqoGowhdaNk+i8gA==&target=main"></iframe>
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
