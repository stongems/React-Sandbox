import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <link to="/" className="navbar-logo">
                Matthew St. Onge <i class="fas fa-fighter-jet"></i>
            </link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
