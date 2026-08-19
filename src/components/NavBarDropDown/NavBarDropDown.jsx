import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavBarDropDown = ({ pathName, links = [] }) => (
  <li className="nav-item dropdown d-inline-block">
    <button
      className="nav-link dropdown-toggle text-light btn btn-link"
      type="button"
      id={`dropdown-${pathName}`}
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {pathName}
    </button>

    <ul
      className="dropdown-menu dropdown-menu-end"
      aria-labelledby={`dropdown-${pathName}`}
    >
      {links.map((link, index) => (
        <React.Fragment
         key={link.path}>
          <li>
            <Link className="dropdown-item" to={link.path}>
              {link.title}
            </Link>
          </li>

          {index < links.length - 1 && (
            <li>
              <hr className="dropdown-divider" />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  </li>
);

NavBarDropDown.propTypes = {
  pathName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};