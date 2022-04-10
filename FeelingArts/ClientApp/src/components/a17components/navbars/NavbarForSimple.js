import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function NavbarForSimple() {
  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  return (
    <>
        <Navbar className="navbar-dark bg-dark" expand="lg">
              <Container>
                  <NavbarBrand className="mr-lg-3" to="/homepage" tag={Link}>
                      <img src={require("assets/NewImg/weblogo.png")}></img>
                  </NavbarBrand>
                  <a href="homepage" onClick={(e) => e.button()}>
                  <NavbarBrand Text style={{ color: 'white', fontSize: 28 }}>
                          Feeling arts
          </NavbarBrand>
                      </a>             
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarForSimple;
