import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";

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
      .get(
        "http://192.168.3.59:8080/mhicssPwaIdPwChk.hi?token=" +
          this.props.login_token +
          "&device_uuid=1&device_token=" +
          this.props.login_token +
          "&id=" +
          this.state.user_emp_id +
          "&password=" +
          this.state.passwd
      )
      .then((response) => {
        if (response.data.errorMsg !== "") {
          alert(response.data.errorMsg);
        } else {
          let login_token = this.props.login_token;
          ReactDOM.render(<App login_token={login_token} />, root);
        }

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="scrollable login_custom">
          <div className="scrollable-content section">
            <div className="ui raised segment green">
              <strong>HICSS</strong> MOBILE
              <span>
                <b>GROUPEWARE</b>
              </span>
            </div>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="ui form">
                <div className="field">
                  <label>ID</label>
                  <div className="ui left  input">
                    <input
                      placeholder="아이디를 입력해주세요"
                      value={this.state.sabun}
                      onChange={this.handleChange}
                      name="user_emp_id"
                    />
                  </div>
                </div>
              </div>
              <div className="ui form">
                <div className="field">
                  <label>PASSWORD</label>
                  <div className="ui left  input">
                    <input
                      className="form-control"
                      placeholder="비밀번호"
                      value={this.state.passwd}
                      onChange={this.handleChange}
                      name="passwd"
                    />
                  </div>
                </div>
              </div>
              <div className="fluid ui form">
                <button type="submit" className="fluid ui button blue">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
