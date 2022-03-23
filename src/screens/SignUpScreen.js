import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackages, register } from "../actions/userActions";

const SignupScreen = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [package_name, setPackageName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.register);
  const { loading, error, userRegInfo } = userRegister;

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  const getPackage = useSelector((state) => state.packageDetails);
  const { error: pkError, packageDetails } = getPackage;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
    dispatch(getPackages());
  }, [dispatch, userInfo, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      register(
        first_name,
        last_name,
        business_name,
        package_name,
        phone,
        email,
        password
      )
    );
  };

  // const loadPackages = () => {
  //   dispatch(getPackages());
  // };

  return (
    <>
      <form className={`form-container`}>
        <h2>Register</h2>

        {error ? <h2>{error}</h2> : pkError && <h2>{pkError}</h2>}

        {loading && <h2>Loading...</h2>}

        {userRegInfo && (
          <>
            <p>We've sent an OTP to this email address</p>
            <p>
              Click <Link to="/verify">here</Link> and enter OTP and verify your
              account
            </p>
          </>
        )}

        <div className="form-elements">
          <div className="form-element">
            <label>First Name:</label>
            <div className="input-element">
              <input
                type="text"
                name="First name"
                placeholder="Write here"
                value={first_name}
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
                value={last_name}
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
                value={business_name}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-element">
            <label>Select Package:</label>
            <div className="input-element">
              <select
                value={package_name}
                onChange={(e) => setPackageName(e.target.value)}
                // onClick={loadPackages}
              >
                <option value="">Select</option>
                {packageDetails &&
                  packageDetails.data.map((pack) => {
                    return (
                      <option value={pack.name} key={pack.id}>
                        {pack.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div className="form-element">
            <label>Phone:</label>
            <div className="input-element">
              <input
                type="text"
                name="Phone"
                placeholder="Write here"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
