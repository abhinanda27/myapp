import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/home" activeStyle>
           Home
          </NavLink>
          <NavLink to="/medicines" activeStyle>
           Medicines
          </NavLink>
          <NavLink to="/cart" activeStyle>
           Cart
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;