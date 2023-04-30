import React from "react";
import { HeaderBody } from "./HeaderStyle";
import NhipsLogo from "../../images/Nhips_logo.png";

const Header = () => {
  return (
    <HeaderBody>
      <div id="logoDiv">
        <img id="logoImg" src={NhipsLogo} alt="logoImage" />
        <p id="logoTitle">Nhips</p>
      </div>
    </HeaderBody>
  );
};

export default Header;
