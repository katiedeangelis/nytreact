import React from "react";
import {Navbar, NavItem, Row, Col} from 'react-materialize'

const Header = props => (
    <Row>
        <Col s={12} className='nav-bar-header'>
            <Navbar brand='New York Times Article Scrubber' left>
                <NavItem href='get-started.html'>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
            </Navbar>
        </Col>
    </Row>
  );
  
  export default Header;