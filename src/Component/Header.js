import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="a" className="navbar-brand">
          {props.branding}
        </a>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="a" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  //default value when props are noty passed
  branding: "My APP"
};

Header.PropTypes = {
  //Data Types should match Otherwise it will give warning
  branding: PropTypes.object.isRequired
};

export default Header;
