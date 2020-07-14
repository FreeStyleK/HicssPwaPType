import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./App.css";
import "./css/common.css";
import "./css/main.css";
import getInfo from "./getInfo";

const root = document.getElementById("root");
var axios = require("axios");
var ifrmHeigh = document.documentElement.clientHeight - 50;

// resize
window.onresize = function (event) {
  let frame = document.getElementById("ifweb");
  frame.contentWindow.postMessage(document.documentElement.clientHeight - 50, "*");
  document.getElementById("ifweb").height = document.documentElement.clientHeight - 50;
};

// reload
if (window.performance.navigation.type === 1) {
  window.location.href = "https://hicss.co.kr:3000";
}

class App extends Component {
  more() {
    if (document.getElementById("selectFormList").style.display === "none") {
      document.getElementById("selectFormList").style.display = "block";
    } else {
      document.getElementById("selectFormList").style.display = "none";
    }
  }

  setParam() {
    if (this.props.alaramParams !== "" && this.props.alaramParams !== undefined) {
      var jsonData = JSON.parse(this.props.alaramParams);
      for (var i = 0; i < Object.keys(jsonData).length; i++) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = Object.keys(jsonData)[i];
        input.value = jsonData[Object.keys(jsonData)[i]];
        document.getElementById("alarmForm").append(input);
      }
    }
  }

  componentDidMount() {
    getInfo.setToken(this.props.login_token);
    getInfo.setUser_emp_id(this.props.user_emp_id);
    // PWA 하단 메뉴를 DB에서 불러온다.
    axios
      .get("https://hicss.co.kr/mhicssPwaBottom.hi?user_emp_id=" + this.props.user_emp_id)
      .then((response) => {
        console.log("menu", response.data.result);
        for (var i = 0; i < response.data.result.length; i++) {
          var li = document.createElement("li");
          var key = response.data.result[i].umn_key;
          var html = "";
          li.setAttribute("id", key);
          // 메인에 보일 것인지 더보기 안에 들어갈 것인지 확인
          if (response.data.result[i].main_yn === "Y") {
            html = '<div class="list_img"><i class="' + response.data.result[i].icon_css + '"></i></div><span>' + response.data.result[i].umn_ko + "</span>";
            li.innerHTML = html;
            document.getElementById("bottomArea").prepend(li);
          } else {
            html = response.data.result[i].umn_ko;
            li.innerHTML = html;
            document.getElementById("selectFormList").prepend(li);
          }
          document.getElementById(key).onclick = (function (i) {
            return function () {
              bottomClick(response.data.result[i].umn_key);
            };
          })(i);

          function bottomClick(e) {
            if (e === "logout") {
              if (window.confirm("로그아웃을 하시겠습니까?")) {
                axios
                  .get("https://hicss.co.kr/mhicssPwaLogout.hi?device_uuid=" + getInfo.getToken())
                  .then((response) => {
                    console.log(response.data.result);
                    if (response.data.result === "true") {
                      ReactDOM.render(<Login login_token={getInfo.getToken()} />, root);
                    } else {
                      console.log(response);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            } else {
              document.getElementById("ifweb").src = "https://hicss.co.kr/mhicssPwaGateway.hi?token=" + getInfo.getToken() + "&target=" + e + "&user_emp_id=" + getInfo.getUser_emp_id();
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // 푸시 알람 클릭을 위한 분기
    if (this.props.alaramParams === "" || this.props.alaramParams === undefined) {
      document.getElementById("ifweb").src = "https://hicss.co.kr/mhicssPwaGateway.hi?target=main&token=" + this.props.login_token + "&user_emp_id=" + this.props.user_emp_id;
    } else {
      this.setParam();
      document.alarm.target = "ifweb";
      document.alarm.action = "https://hicss.co.kr/mhicssMove.hi";
      document.alarm.submit();
    }
    // ios 사용자를 위한 local Storage 저장
    localStorage.user_emp_id = this.props.user_emp_id;
  }

  render() {
    const wrapStyle = {
      margin: "0px",
      marginTop: "-0.2%",
    };

    const selectFormStyle = {
      maxHeight: "160px",
      overflow: "auto",
      border: "1px solid #ccc",
      width: "200px",
      maxWidth: "200px",
      paddingLeft: "10px",
      borderRadius: "3px",
      position: "absolute",
      zIndex: "999",
      background: "#FFFFFF",
      bottom: "50px",
      right: "5%",
      display: "none",
    };

    return (
      <Fragment>
        {/* <div id="" classNameName="top_area"></div> */}
        <form id="alarmForm" name="alarm" target="ifweb" method="POST"></form>
        <iframe name="ifweb" id="ifweb" width="100%" height={ifrmHeigh} title="gw"></iframe>
        <ul id="selectFormList" style={selectFormStyle}></ul>
        <div className="wrap" style={wrapStyle}>
          <div className="nav" style={{ height: "50px" }}>
            <ul id="bottomArea">
              <li onClick={() => this.more()}>
                <div className="list_img">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
