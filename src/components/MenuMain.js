import { getByTitle } from "@testing-library/react";
import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Image,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styling/components/MenuMain.css";

function MenuMain({ title }) {
  return (
    <>
      <Navbar className="menu-main">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <div class="dropdown mobile">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link to="/dashboard" className="dropdown-item">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/starships" className="dropdown-item">
                StarShip
              </Link>
            </li>
            <li>
              <Link to="/people" className="dropdown-item">
                People
              </Link>
            </li>
            <li>
              <Link to="/vechicles" className="dropdown-item">
                Vechicles
              </Link>
            </li>
            <li>
              <Link to="/species" className="dropdown-item">
                Species
              </Link>
            </li>
          </ul>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <i class="far fa-bell position-relative m-3">
              <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
            </i>
            <i class="far fa-comment-alt"></i>
            <Image src={require("../assets/images.png").default} className="" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MenuMain;
