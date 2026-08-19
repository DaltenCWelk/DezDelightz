import React from "react";
import PropTypes from "prop-types";

import { NavBarLink } from "../NavBarLink/NavBarLink";
import { NavBarDropDown } from "../NavBarDropDown/NavBarDropDown";

export const NavBar = ({ items = [] }) => {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        {items.map((item, index) => {
          if (item.type === "link") {
            return <NavBarLink key={index} {...item} />;
          }

          if (item.type === "dropdown") {
            return <NavBarDropDown key={index} {...item} />;
          }

          return null;
        })}
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  items: PropTypes.array,
};
