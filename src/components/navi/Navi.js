import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "../root/App.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Row, Col,
  Container,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const Navi = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavLink ><Link to="/" className="navlinks">OnurAltuntasDev</Link></NavLink>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse className='collapse' isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink ><a className="navlinks" href="https://tr.reactjs.org/">React.js</a></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><a className="navlinks" href="https://github.com/OnurAltuntas">Github</a></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/adminpanel" >Admin Panel</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/aboutme" >About me</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/projects" >Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/resume" >Resume</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className="navlinks" to="/contact" >Contact</Link></NavLink>
            </NavItem>
          </Nav>
          <div>
           
              <Row>
                <Col><a href="https://tr.linkedin.com/in/onur-altunta%C5%9F-2103a319a" rel="noopener noreferrer" target="_blank">
                  <img style={{ height: "2rem" }} src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin"></img>
                </a></Col>
                <Col> <a href="https://twitter.com/beyhudedolanik" rel="noopener noreferrer" target="_blank">
                  <img style={{ height: "2rem" }} src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="Linkedin"></img>
                </a></Col>
                <Col> <a href="https://www.youtube.com/channel/UCalJQ45NyMzMvPqK5n0xYEA/" rel="noopener noreferrer" target="_blank">
                  <img style={{ height: "2rem" }} src="https://image.flaticon.com/icons/svg/174/174883.svg" alt="Linkedin"></img>
                </a></Col>
                <Col> <a href="https://github.com/OnurAltuntas" rel="noopener noreferrer" target="_blank">
                  <img style={{ height: "2rem" }} src="https://image.flaticon.com/icons/png/512/733/733553.png" alt="Linkedin"></img>
                </a></Col>
              </Row>
           

          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;