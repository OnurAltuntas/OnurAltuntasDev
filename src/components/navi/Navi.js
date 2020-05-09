import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "../root/App.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,

  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="header-color" color="light" light expand="md">
        <NavLink ><Link to="/" style={{ textDecoration: 'none',color:'white' }} >OnurAltuntasDev</Link></NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://tr.reactjs.org/" style={{ textDecoration: 'none',color:'white' }}>React.js</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/OnurAltuntas" style={{ textDecoration: 'none',color:'white' }}>GitHub</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink><Link to="/adminpanel" style={{ textDecoration: 'none',color:'white' }}>Admin Panel</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/aboutme" style={{ textDecoration: 'none',color:'white' }}>About me</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/projects" style={{ textDecoration: 'none',color:'white' }}>Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/resume" style={{ textDecoration: 'none',color:'white' }}>Resume</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/contact" style={{ textDecoration: 'none',color:'white' }}>Contact</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;