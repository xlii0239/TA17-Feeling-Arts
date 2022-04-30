import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function NavbarForHome() {
  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  return (
    <>
        <Navbar className="navbar-dark bg-dark" expand="lg">
              <Container>
                  <NavbarBrand className="mr-lg-3" to="/homepage" tag={Link}>
                      <img src={require("assets/NewImg/weblogo.png")} alt="Feeling arts website logo" style={{width:55,height:45}}></img>
                  </NavbarBrand>
                  <a href="homepage" onClick={(e) => e.button()}>
                  <NavbarBrand Text style={{ color: 'white', fontSize: 28 }}>
                          Feeling arts
                  </NavbarBrand>
                      </a>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <NavLink
                              className="nav-link-icon"
                              href="simplemode"
                              onClick={(e) => e.button()}
                          >
                              <span className="nav-link-inner--text">Simple Mode</span>
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink
                              className="nav-link-icon"
                              href="normalmode"
                              onClick={(e) => e.button()}
                          >
                              <span className="nav-link-inner--text">Normal Mode</span>
                          </NavLink>
                      </NavItem>
                      </ Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarForHome;
