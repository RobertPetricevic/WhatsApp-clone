import React from "react";
import { auth, provider } from "../firebase";

import { useContextValue } from "../Context";
import { actionTypes } from "../reducer";

function Login() {
  const [{}, dispatch] = useContextValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
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
