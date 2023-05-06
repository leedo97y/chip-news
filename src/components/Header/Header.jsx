import React from "react";
import { HeaderBody } from "./HeaderStyle";
import NhipsLogo from "../../images/Nhips_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBody>
      <div id="logoDiv">
        <img id="logoImg" src={NhipsLogo} alt="logoImage" />
        <p id="logoTitle">
          <Link to="/">Nhips</Link>
        </p>
      </div>
    </HeaderBody>
  );
};

export default Header;
