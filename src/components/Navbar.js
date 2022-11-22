import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const name = profile?.name;
  const location = useLocation();
  useEffect(()=>{
    
  }, [location])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light bg-dark navbar-dark">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              Let's Chat
            </Link>{" "}
          </div>
          <div>
            {name && <h5 className="text-info d-inline mx-3">{name}</h5>}
            {name ? (
              <Link className="navbar-brand" to="/" onClick={() => localStorage.clear()}>
                Logout
              </Link>
            ) : (
              <Link className="navbar-brand" to="/auth">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
