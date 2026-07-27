import React from "react";
import PropTypes from "prop-types";

export const NavBar = ({ dropDowns = [] }) => {
    return (
        <div 
            className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {dropDowns.map((args,1) => {
                        return <NavBarDropDown key={i} {...args} />;
                    })}
                </ul>
            </div>
    )
}
NavBar.PropTypes = {
    dropDowns: PropTypes.array,
};