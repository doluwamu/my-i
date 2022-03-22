import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../actions/userActions";
import { Link } from "react-router-dom";

const VerifyUserScreen = () => {
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.register);
  const { userRegInfo } = userRegister;

  const userVerification = useSelector((state) => state.verify);
  const { loading, success, error } = userVerification;

  useEffect(() => {
    if (userRegInfo) {
      setEmail(userRegInfo.data.email);
    }
  }, [userRegInfo]);

  if (success) {
    return (
      <>
        <h2>Account successfully verified</h2>
        <h2>
          click <Link to="/">here</Link>{" "}
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
