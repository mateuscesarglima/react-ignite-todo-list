import React from "react";
import * as C from "./styles";
import Logo from "@assets/logo.png";

const Header = () => {
  return (
    <C.HeaderContainer>
      <img src={Logo} alt="" />
    </C.HeaderContainer>
  );
};

export default Header;
