import React, { Component } from "react";
import { Link } from "react-router-dom";

class SaleNavbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 rounded-3">
          <Link
            to={"/home"}
            align="center"
            className="navbar-brand col-sm-3 col-md-2 mr-0 "
          >
            Inventory
          </Link>
          <ul className="navbar-nav px-5 ">
            <li className="nav-item text-nowrap">
              <Link to={"/createsale"} className="nav-link text-white">
                Create Sale
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-5">
            <li className="nav-item text-nowrap">
              <Link to={"/displaysale"} className="nav-link text-white">
                All Sales
              </Link>
            </li>
          </ul>

          <input
            className="form-control form-control-dark w-100 mx-2 my-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </nav>
      </>
    );
  }
}

export default SaleNavbar;
