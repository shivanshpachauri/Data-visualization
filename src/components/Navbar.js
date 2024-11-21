import React from "react";
// import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom"; // Keep only Link from react-router-dom
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Search from "./Search.js";

const CustomNavbar = () => {
  return (
    <div style={{ display: "block" }}>
      <Navbar expand="lg" className="bg-info" style={{ height: "50px" }}>
        {/* <div className="Container"> */}
        <Navbar.Brand href="/">Dashboard Layout</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Line">
              Linechart
            </Nav.Link>
            <Nav.Link as={Link} to="/Bar">
              BarChart
            </Nav.Link>
            <Nav.Link as={Link} to="/Pie">
              PieChart
            </Nav.Link>
            <Nav.Link as={Link} to="/Scatter">
              Scatter plot
            </Nav.Link>

            <Nav.Link as={Link} to="/Radar">
              Radar Chart
            </Nav.Link>

            <Nav.Link as={Link} to="/CustomFlow">
              FlowChart
            </Nav.Link>
            <NavDropdown tite="Graph" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" to="/CustomFlow">
                Something
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <label style={{ margin: "10px" }}>Search </label>

        <Search style={{ margin: "10px" }} />
        <a href="https://www.google.com/"></a>
        {/* <input
          type="search"
          name="search"
          style={{ animation: "blink ss infinite" }}
        /> */}
        {/* </div> */}
        <Outlet />
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
