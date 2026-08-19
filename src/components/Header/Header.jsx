import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";

export const Header = ({ dropDowns }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-DDbrown">
        <div className="container">
          <Link
            className="navbar-brand d-flex fw-bold align-items-center"
            to="/"
          >
            <Logo />
            <span className="ms-2 fw-bold">Dez Delightz</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavBar
            items={[
              {
                type: "link",
                pathName: "Home",
                path: "/",
              },
              {
                type: "link",
                pathName: "Portfolio",
                path: "/portfolio",
              },
              {
                type: "dropdown",
                pathName: "Services",
                links: [
                  {
                    title: "Website Design",
                    path: "/services/WebDesign",
                  },
                  {
                    title: "Software Development",
                    path: "/services/software-development",
                  },
                ],
              },
              {
                type: "dropdown",
                pathName: "Shop",
                links: [
                  {
                    title: "Ceramics",
                    path: "/shop/ceramics",
                  },
                  {
                    title: "Art",
                    path: "/shop/art",
                  },
                  {
                    title: "Plants",
                    path: "/shop/plants",
                  },
                ],
              },
              {
                type: "dropdown",
                pathName: "Info",
                links: [
                  {
                    title: "About Me",
                    path: "/about",
                  },
                  {
                    title: "Contact Me",
                    path: "/contact",
                  },
                ],
              },
            ]}
          />
        </div>
      </nav>
    </>
  );
};
