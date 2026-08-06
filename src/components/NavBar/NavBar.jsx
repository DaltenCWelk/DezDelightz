import React from "react";
import PropTypes from "prop-types";
import { NavBarDropDown } from "../NavBarDropDown/NavBarDropDown";

export const NavBar = ({ dropDowns = [] }) => {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        {dropDowns.map((args, i) => {
          return <NavBarDropDown key={i} {...args} />;
        })}
      </ul>
    </div>
  );
};
NavBar.propTypes = {
  dropDowns: PropTypes.array,
};

