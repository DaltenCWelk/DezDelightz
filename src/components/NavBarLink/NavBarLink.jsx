import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavBarLink = ({ pathName, path }) => (
  <li className="nav-item">
    <Link className="nav-link text-light" to={path}>
      {pathName}
    </Link>
  </li>
);

NavBarLink.propTypes = {
  pathName: PropTypes.string,
  path: PropTypes.string,
};