import React from 'react';

const NavBar = () => {
  return (
    <nav className="main-container nav-bar">
      <div className="nav-logo">hh.</div>
      
      {/* Mobile Menu Icon (Hamburger) */}
      <div className="nav-burger">
        <span></span>
        <span></span>
      </div>

      {/* Desktop Buttons (Show only on PC via CSS) */}
      <div className="nav-desktop-actions">
        <button className="btn btn-outline">Log in</button>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </nav>
  );
};

export default NavBar;