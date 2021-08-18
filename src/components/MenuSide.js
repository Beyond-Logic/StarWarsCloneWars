import React from "react";
import { Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../styling/components/MenuSide.css";

function MenuSide() {
  return (
    <>
      <div className="menu-side">
        <Link to="/dashboard">
          <Image
            src={require("../assets/Star wars logo.png").default}
            className="logo"
          />
        </Link>

        <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <NavLink to="/dashboard" activeClassName="active" class="nav-link">
              <Image
                src={require("../assets/dashboard.svg").default}
                className=""
              />
              Dashboard
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/starships" activeClassName="active" class="nav-link">
              <Image
                src={require("../assets/building.svg").default}
                className=""
              />
              StarShip
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/people" activeClassName="active" class="nav-link">
              <Image
                src={require("../assets/shopping-basket (1).svg").default}
                className=""
              />
              People
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/vechicles" activeClassName="active" class="nav-link">
              <i class="fas fa-car"></i>
              Vechicle
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/species" activeClassName="active" class="nav-link">
              <Image src={require("../assets/menu.svg").default} className="" />
              Species
            </NavLink>
          </li>
          <li class="nav-item ">
            <Link to="/" class="nav-link m-5">
              <i class="fas fa-sign-out-alt"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuSide;
