import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  const userRegister = useSelector((state) => state.register);
  const { userRegInfo } = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleLogout = () => {
    if (userInfo) {
      sessionStorage.removeItem("userInfo");
    }

    if (userRegInfo) {
      sessionStorage.removeItem("userRegInfo");
    }
    window.location.reload();
  };

  return (
    <>
      <h2>Welcome</h2>
      <p onClick={handleLogout} style={{ color: "blue", cursor: "pointer" }}>
        Logout
      </p>
    </>
  );
};

export default Home;
