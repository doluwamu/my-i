import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>

      <form className={`form-container ${darkTheme ? "dark" : "light"}`}>

        <h2>Register</h2>

        <div className="form-elements">
          <div className="form-element">
            <label>First Name:</label>
            <div className="input-element">
              <input
                type="text"
                name="First name"
                placeholder="Write here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <label>Last Name:</label>
            <div className="input-element">
              <input
                type="text"
                name="Last name"
                placeholder="Write here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <label>Business Name:</label>
            <div className="input-element">
              <input
                type="text"
                name="Business Name"
                placeholder="Write here"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
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
          	<label>Select Package:</label>
            <div className="input-element">
              <select >
              	<option value=''>Select</option>
              	<option>Hello</option>
              	<option>Hello</option>
              </select>
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

          {/* <div className="form-element">
            <label>Confirm Password:</label>
            <div className="input-element">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Write here"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div> */}

          <div className="form-element">
            <button type="submit" onClick={handleRegister}>
             Register
            </button>
          </div>
        </div>

        <div className="form-links">
          <p>
            or <Link to={"/"}>Login</Link>?
          </p>
        </div>
      </form>
    </>
  );
};

export default SignupScreen;
