import React from "react";
import { Link, withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
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

const ItemNavigation = ({ text, path }) => {
  return (
    <Link to={path}>
      <button onClick={() => console.log(text)}>{text}</button>
    </Link>
  );
};

const NavBar = () => {
  const ItemNavigationRouter = withRouter(ItemNavigation);

  return (
    <nav className="navbar">
      <div className="name-tag">
        <h1>Victoria Martin</h1>
      </div>
      {/* <div className="navigation"> */}
      {NAV_ITEMS.map((e, i) => (
        // <ItemNavigationRouter text={e.text} key={uuid()} />
        <ItemNavigationRouter text={e.text} key={uuid()} path={e.path} />
      ))}
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
