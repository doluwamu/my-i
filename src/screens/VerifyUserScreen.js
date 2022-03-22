import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../actions/userActions";
import { Link } from "react-router-dom";

const VerifyUserScreen = ({ history }) => {
  const [OTP, setOTP] = useState("");
  //   const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.register);
  const { userRegInfo } = userRegister;

  const userVerification = useSelector((state) => state.verify);
  const { success } = userVerification;

  useEffect(() => {
    if (success) {
      return history.push("/");
    }
  }, [success, history]);

  const handleVerifyUser = (e) => {
    e.preventDefault();
    if (userRegInfo) dispatch(verifyUser(OTP, userRegInfo.data.email));
  };

  return (
    <>
      <form className="form-container">
        <h2>Login</h2>

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
