import React from "react";
import "../../Page/Style/home.css";

import Login from "../../Component/Login";
import Logo from "../../assets/logo.png";
const Home = () => {
  return (
    <div className="main-body">
      <div className="Home-field">
        <div>
          <div className="autoLogo">Auto Reply</div>
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
