import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./App.css";

const root = document.getElementById("root");
var axios = require("axios");
var ifrmHeigh = window.innerHeight - 80;

class App extends Component {
  bottomClick(e) {
    if (e === "logout") {
      axios
        .get("https://hicss.co.kr/mhicssPwaLogout.hi?device_uuid=" + this.props.login_token)
        .then((response) => {
          console.log(response.data.result);
          if (response.data.result === "true") {
            ReactDOM.render(<Login login_token={this.props.login_token} />, root);
          } else {
            console.log(response);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      document.getElementById("ifweb").src = "https://hicss.co.kr/mhicssPwaGateway.hi?token=" + this.props.login_token + "&target=" + e;
    }
  }

  componentDidMount() {
    document.getElementById("ifweb").src = "https://hicss.co.kr/mhicssPwaGateway.hi?target=main&token=" + this.props.login_token;
  }

  render() {
    return (
      <Fragment>
        {/* <div id="" className="top_area"></div> */}
        <iframe id="ifweb" width="100%" height={ifrmHeigh} title="gw"></iframe>
        <div id="" className="bottom_area">
          <ul className="bottomUl">
            <li onClick={() => this.bottomClick("main")}>
              <span className="alert_icon" id="alert2"></span>
              <span>홈</span>
            </li>
            <li onClick={() => this.bottomClick("approval")}>
              <span className="alert_icon" id="alert4"></span>
              <span>결재</span>
            </li>
            <li onClick={() => this.bottomClick("mail")}>
              <span className="alert_icon" id="alert4"></span>
              <span>메일</span>
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
