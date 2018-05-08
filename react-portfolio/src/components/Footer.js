import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import StickyFooter from 'react-sticky-footer';

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
export default Footer;