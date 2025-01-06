import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const { loginWithRedirect, logout,  isAuthenticated, user  } = useAuth0();
  const [navbar, setNavBar] = useState(false)
  const handleNavScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNavBar(true) : setNavBar(false);
    
  }
  window.addEventListener('scroll',  handleNavScroll)
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${navbar === true ? 'sticky' : ''}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i class="bi bi-bag" fs-5></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
              {
                 isAuthenticated && (
                  <img src={user.picture} alt={user.name} className="user-img"/>
                 )
              }
              {
                isAuthenticated ?  <Nav.Link as={Link} to="/">
                <button className="btn order-now2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                  </button>
                </Nav.Link> : <Nav.Link as={Link} to="/">
              <button className="btn order-now2" onClick={() => loginWithRedirect()}>Log In</button>
              </Nav.Link>
              }

              
             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
