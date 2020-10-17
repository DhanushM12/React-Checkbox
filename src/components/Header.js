import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__nav">
        <div className="header__option">Home</div>
        <div className="header__option">My Portfolio</div>
        <div className="header__option">Clients</div>
        <div className="header__option">Get in Touch</div>
      </div>
    </div>
  );
}

export default Header;
