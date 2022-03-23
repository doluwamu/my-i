import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const SigninScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.login);
  const { loading, error, userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if (userInfo) {
  //   navigate("/home");
  // }

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}

      <form className="form-container">
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
