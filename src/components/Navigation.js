// export a navigation component (use react-router-dom)
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const NavgationComponent = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li className="navigation__item">
          <NavLink exact to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/modeler" activeClassName="active">
            MODELER
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/frameworks" activeClassName="active">
            FRAMEWORKS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavgationComponent;
