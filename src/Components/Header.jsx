import React from "react";
import Img from "../Assets/nihal.icon.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Img} alt="logo" width="70" height="50" />
        <h1>Keep Note</h1>
      </div>
    </>
  );
};

export default Header;
