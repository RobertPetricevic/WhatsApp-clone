import React from "react";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="app card login">
      <div className="login-container">
        <h1 className="login-title">Sign In to WhatsApp</h1>
        <button className="login-btn" onClick={signIn}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
