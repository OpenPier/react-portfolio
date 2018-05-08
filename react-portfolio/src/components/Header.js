import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    


    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Tyler Stanley | Creative Consultant | Fullstack Web Developer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="../pages/About">About |</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="../pages/Contact">Contact |</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Portfolio
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Creative Consultant
                    </DropdownItem>
                  <DropdownItem>
                    Small Business Websites
                  </DropdownItem>
                  <DropdownItem>
                    Teacher Websites
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
