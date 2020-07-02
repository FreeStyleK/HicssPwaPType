import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/common.css";
import "./css/login.css";
import logo from "./img/logo.png";

const root = document.getElementById("root");
var axios = require("axios");
class Login extends Component {
  state = {
    user_emp_id: "",
    passwd: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 아이디 비밀번호 체크
    axios
<<<<<<< HEAD
      .get("http://192.168.3.53:8090/mhicssPwaIdPwChk.hi?&device_uuid=" + this.props.login_token + "&device_token=" + this.props.login_token + "&id=" + this.state.user_emp_id + "&password=" + this.state.passwd)
=======
      .get("https://hicss.co.kr/mhicssPwaIdPwChk.hi?&device_uuid=" + this.props.login_token + "&device_token=" + this.props.login_token + "&id=" + this.state.user_emp_id + "&password=" + this.state.passwd)
>>>>>>> b57cd4f4f388c503db0a9101e179d70c4e337907
      .then((response) => {
        if (response.data.errorMsg !== "") {
          alert(response.data.errorMsg);
        } else {
          let login_token = this.props.login_token;
          ReactDOM.render(<App login_token={login_token} />, root);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="wrap">
          <div className="logo">
            <img src={logo} alt="로고" />
          </div>
          <div className="content">
            <form className="login_form" onSubmit={this.handleSubmit}>
              <div className="id_area">
                <input type="text" id="id" placeholder="아이디" value={this.state.sabun} onChange={this.handleChange} name="user_emp_id" />
              </div>
              <div className="pw_area">
                <input type="password" id="pw" className="form-control" placeholder="비밀번호" value={this.state.passwd} onChange={this.handleChange} name="passwd" />
              </div>
              <input type="submit" className="login primary_bg" value="로그인" />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
