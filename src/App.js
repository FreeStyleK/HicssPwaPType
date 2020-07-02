import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./App.css";
import "./css/common.css";
import "./css/main.css";

const root = document.getElementById("root");
var axios = require("axios");
var ifrmHeigh = window.innerHeight - 50;

class App extends Component {
  bottomClick(e) {
    if (e === "logout") {
      if (window.confirm("로그아웃을 하시겠습니까?")) {
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
      }
    } else {
      document.getElementById("ifweb").src = "https://hicss.co.kr/mhicssPwaGateway.hi?token=" + this.props.login_token + "&target=" + e;
    }
  }

  componentDidMount() {
    document.getElementById("ifweb").src = "https://hicss.co.kr/mhicssPwaGateway.hi?target=main&token=" + this.props.login_token;
  }

  render() {
    const wrapStyle = {
      margin: "0px",
      marginTop: "-0.2%",
    };

    return (
      <Fragment>
        {/* <div id="" classNameName="top_area"></div> */}
        <iframe id="ifweb" width="100%" height={ifrmHeigh} title="gw"></iframe>
        <div className="wrap" style={wrapStyle}>
          <div className="nav" style={{ height: "50px" }}>
            <ul>
              <li onClick={() => this.bottomClick("main")}>
                <div className="list_img">
                  <i className="fas fa-home"></i>
                </div>
                <span>홈</span>
              </li>
              <li onClick={() => this.bottomClick("mail")}>
                <div className="list_img">
                  <i className="far fa-envelope"></i>
                </div>
                <span>메일</span>
              </li>
              <li onClick={() => this.bottomClick("approval")}>
                <div className="list_img">
                  <i className="fas fa-edit"></i>
                </div>
                <span>결재</span>
              </li>
              <li onClick={() => this.bottomClick("board")}>
                <div className="list_img">
                  <i className="far fa-clipboard"></i>
                </div>
                <span>게시판</span>
              </li>
              <li onClick={() => this.bottomClick("schedule")}>
                <div className="list_img">
                  <i className="far fa-calendar"></i>
                </div>
                <span>일정</span>
              </li>
              <li onClick={() => this.bottomClick("organ")}>
                <div className="list_img">
                  <i className="fas fa-sitemap"></i>
                </div>
                <span>조직도</span>
              </li>
              <li onClick={() => this.bottomClick("main")}>
                <div className="list_img">
                  <i className="far fa-handshake"></i>
                </div>
                <span>협업</span>
              </li>
              <li onClick={() => this.bottomClick("logout")}>
                <div className="list_img">
                  <i className="fas fa-sign-out-alt"></i>
                </div>
                <span>로그아웃</span>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
