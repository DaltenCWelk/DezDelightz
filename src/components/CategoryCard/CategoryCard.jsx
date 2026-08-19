import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CategoryCard = ({ name, path }) => {
  return (
    <Link
      to={path}
      className="card h-100 text-center text-info text-decoration-none shadow-sm"
    >
      <div className="card-body d-flex align-items-center justify-content-center">
        <h3 className="card-title">{name}</h3>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CategoryCard;