import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import App  from './App';

const root = document.getElementById("root");

class Login extends Component {
    test () {
        if (true) {
            ReactDOM.render(<App />, root); 
        }
      }
    render() {
        return (
            <div onClick={this.test}>
                로그인
            </div>
        );
      }   
}


export default Login;