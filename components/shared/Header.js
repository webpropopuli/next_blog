import React from "react";
import Link from "next/link";
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from "reactstrap";

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const LoginBtn = () => {
  return <span className="nav-link port-navbar-link clickable">Enter</span>;
};

const LogoutBtn = () => {
  return <span className="nav-link port-navbar-link clickable">Exit</span>;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.StaticRange.isOpen });
  }
  render(props) {
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand " href="/">
            David Marlowe
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>

            {/* <NavItem className="port-navbar-item">
              <BsNavLink route="/blog" title="blog" />
            </NavItem> */}

            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolioAll" title="portfolio" />
            </NavItem>

            {/* <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="'Who is this guy anyway?'" />
            </NavItem> */}

            <NavItem className="port-navbar-item">
              <LoginBtn />
            </NavItem>

            <NavItem className="port-navbar-item">
              <LogoutBtn />
            </NavItem>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
