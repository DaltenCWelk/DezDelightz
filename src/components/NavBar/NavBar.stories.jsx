import React from "react";
import { NavBar } from ".";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Components/NavBar",
    component: NavBar,
};

const Template = (args) => {
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light py-0">
            <div className="container-fluid py-0">
                <NavBar {...args} />
            </div>
        </nav>
    </Router>
};

export const Default = Template.bind({});
Default.args = {
    dropDowns: [
        {}, {},
    ],
};