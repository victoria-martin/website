import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
import devices from "../helpers/devices.json";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
// import { withRouter } from "react-router";
const NAV_ITEMS = [
  {
    text: "Home",
    // image: '/',
    path: "/",
  },
  {
    text: "Mon CV",
    // image: '/',
    path: "/resume",
  },
  {
    text: "Projets",
    // image: '/',
    path: "/projects",
  },
  {
    text: "Contact",
    // image: '/',
    path: "/contact",
  },
  {
    text: "Utils",
    // image: '/',
    path: "/utils",
  },
];

const ItemNavigation = ({ text, path, isMobile, isMobileScreen }) => {
  return (
    <NavLink
      to={path}
      exact={true}
      activeClassName={isMobile || isMobileScreen ? " navbar-mobile__active" : "navbar-desktop__active"}>
      <button>{text}</button>
    </NavLink>
  );
};

ItemNavigation.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  isMobile: PropTypes.bool,
  isMobileScreen: PropTypes.bool,
};

const NavBar = () => {
  const ItemNavigationRouter = withRouter(ItemNavigation);
  const isMobile = useMediaQuery({
    query: `(max-width: ${devices.deviceLargeMobile})`,
  });
  const isMobileScreen = useMediaQuery({
    query: `(max-device-width: ${devices.deviceLargeMobile})`,
  });

  return (
    <nav className={isMobile || isMobileScreen ? "navbar navbar-mobile" : "navbar navbar-desktop"}>
      {/* <nav className="navbar-mobile"> */}
      {isMobile || isMobileScreen ? null : (
        <div className="name-tag">
          <h1>Victoria Martin</h1>
        </div>
      )}
      {NAV_ITEMS.map((e, i) => (
        <ItemNavigationRouter
          text={e.text}
          key={uuid()}
          path={e.path}
          isMobile={isMobile}
          isMobileScreen={isMobileScreen}
        />
      ))}
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
