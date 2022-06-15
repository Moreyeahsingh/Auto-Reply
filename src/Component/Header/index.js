import React from "react";

import {
  HeaderContainer,
  HeaderContant,
  Headerheading,
} from "../StyleComponent/HeaderStyle";

import { useNavigate } from "react-router-dom";
// import { Logout } from "../StyleComponent/HeaderStyle";

import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <HeaderContainer>
      <Headerheading>Auto Reply</Headerheading>

      {/* <Logout>
        <AiOutlineLogout
          onClick={() => {
            localStorage.clear("token");
            Navigate("/");
          }}
          className="logout-icon"
        />
      </Logout> */}
    </HeaderContainer>
  );
};

export default Header;
