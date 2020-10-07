import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = props => {
  return (
    <div className="col-md-12">
      <Navbar color="secondary">
        <NavbarBrand>
          <h2>
            <span role="img" aria-label="books">
              📚
            </span>
            &nbsp; Book Tracker
          </h2>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
