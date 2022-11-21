import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light bg-dark navbar-dark">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              Let's Chat
            </Link>
          </div>
          <div>
            <Link className="navbar-brand" to="/auth">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
