import React from 'react';
import "./Login.css"
import gg from "../../asset/google-icon.svg"

function Login() {
  return <div className="login-container">
    <div className="login-title">LOGIN</div>
    <div className="login-form">
      <div className="login-cacao">
        <button className="login-cacao-btn btn-radius">
          <i></i>
          <span>카카오로 시작하기</span>
        </button>
      </div>
      <div className="login-google">
        <button className="login-google-btn btn-radius">
          <div className="google-icon"><img src={gg} alt="Google" /></div>
          <span>구글로 시작하기</span>
        </button>
      </div>
    </div>
  </div>;
}

export default Login;
