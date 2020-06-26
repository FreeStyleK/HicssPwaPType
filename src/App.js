import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./App.css";
import "./mhicss.css";
import "./mobile-angular-ui-base.css";
import "./mobile-angular-ui-custom.css";
import "./mobile-angular-ui-desktop.css";
import "./mobile-angular-ui-hover.css";
import "./semantic.css";

const root = document.getElementById("root");
var axios = require("axios");
class App extends Component {
  bottomClick(e) {
    if (e === "logout") {
      axios
        .get("http://192.168.3.59:8080/mhicssPwaLogout.hi?token=" + this.props.login_token)
        .then((response) => {
          console.log(response.data.result);
          if (response.data.result === "true") {
            ReactDOM.render(<Login login_token={this.props.login_token} />, root);
          } else {
            alert("로그아웃에 실패하였습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      document.getElementById("ifweb").src = "http://192.168.3.59:8080/mhicssGateway.hi?token=bJpO7rrqoGowhdaNk+i8gA==&target=" + e;
    }
  }

  componentDidMount() {
    document.getElementById("ifweb").src = "http://192.168.3.59:8080/mhicssGateway.hi?target=main&token=" + this.props.login_token;
  }

  render() {
    return (
      <Fragment>
        <br></br>
        <div id="" className="top_area"></div>
        <iframe id="ifweb" width="100%" height="500px" title="gw"></iframe>
        <div id="" className="bottom_area">
          <ul>
            <li onClick={() => this.bottomClick("main")}>
              <span className="alert_icon" id="alert2"></span>
              <span>홈</span>
            </li>
            <li onClick={() => this.bottomClick("approval")}>
              <span className="alert_icon" id="alert4"></span>
              <span>결재</span>
            </li>
            <li onClick={() => this.bottomClick("board")}>
              <span className="alert_icon" id="alert3"></span>
              <span>게시판</span>
            </li>
            <li onClick={() => this.bottomClick("organ")}>
              <span className="alert_icon" id="alert5"></span>
              <span>조직도</span>
            </li>
            <li onClick={() => this.bottomClick("logout")}>
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