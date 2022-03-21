import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className='form-container'>

        <h2>Login</h2>

        <div className="form-elements">
          <div className="form-element">
            <label>Email:</label>
            <div className="input-element">
              <input
                type="email"
                name="email"
                placeholder="Write here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <label>Password:</label>
            <div className="input-element">
              <input
                type="password"
                name="password"
                placeholder="Write here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <button type="submit" onClick={handleSignIn}>
              Login
            </button>
          </div>
        </div>

        <div className="form-links">
          <p>
            or <Link to={"/register"}>register</Link>?
          </p>
        </div>
      </form>
    </>
  );
};

export default SigninScreen;
