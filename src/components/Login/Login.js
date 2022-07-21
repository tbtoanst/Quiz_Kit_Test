import React from 'react';
import "./Login.css"
import google from "../../asset/google-icon.svg"
import cacao from "../../asset/speech-bubble-message.png"

function Login() {
  return <div className="login-container">
    <div className="login-title">LOGIN</div>
    <div className="login-form">
      <div className="login-cacao">
        <button className="login-cacao-btn btn-radius">
          <div className="cacao-icon"><img src={cacao} alt="Cacao" /></div>
          <div className="cacao-caption" style={{ marginRight: "40px" }}><span>카카오로 시작하기</span></div>
        </button>
      </div>
      <div className="login-google">
        <button className="login-google-btn btn-radius">
          <div className="google-icon"><img src={google} alt="Google" /></div>
          <div className="google-caption"><span style={{ marginRight: "40px" }}>구글로 시작하기</span></div>
        </button>
      </div>
    </div>
  </div>;
}

export default Login;
