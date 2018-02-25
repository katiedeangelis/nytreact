import React from "react";
import {Navbar, NavItem} from 'react-materialize'

const Header = props => (
    <Navbar brand='New York Times Article Scrubber' left>
	    <NavItem href='get-started.html'>Getting started</NavItem>
	    <NavItem href='components.html'>Components</NavItem>
    </Navbar>
  );
  
  export default Header;