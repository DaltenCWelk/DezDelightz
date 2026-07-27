import React from "react";
import { Link } from "react-router-dom";
// import { Logo } from "../Logo/Logo";
// import { NavBar } from "../NavBar/NavBar";

export const Header = ({ dropDowns }) => {
  return (
    <nav className="navbar navbar-expanded-lg navbar-dark bg-light py-0">
      <div className="container-fluid ps-0">
        <Link to="/">
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collpase"
          data-bs-target="#navbarSupportedConted"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
