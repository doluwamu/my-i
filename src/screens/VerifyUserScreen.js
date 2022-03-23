import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const VerifyUserScreen = () => {
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.register);
  const { userRegInfo } = userRegister;

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  const userVerification = useSelector((state) => state.verify);
  const { loading, success, error } = userVerification;

  const navigate = useNavigate();

  useEffect(() => {
    if (userRegInfo) {
      setEmail(userRegInfo.data.email);
    }

    if (userInfo) {
      navigate("/verify");
    }
  }, [userRegInfo, userInfo, navigate]);

  if (success) {
    return (
      <>
        <h2>Account successfully verified</h2>
        <h2>
          click <Link to="/">here</Link> to login{" "}
        </h2>
      </>
    );
  }

  const handleVerifyUser = (e) => {
    e.preventDefault();
    dispatch(verifyUser(OTP, email));
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      <form className="form-container">
        <h2>Verify Account</h2>

        <div className="form-elements">
          <div className="form-element">
            <label>OTP:</label>
            <div className="input-element">
              <input
                type="text"
                name="OTP"
                placeholder="Enter otp"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <label>Email:</label>
            <div className="input-element">
              <input
                type="email"
                name="Email"
                placeholder="Write here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <button type="submit" onClick={handleVerifyUser}>
              Verify account
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default VerifyUserScreen;
