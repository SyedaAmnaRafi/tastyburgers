import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


export const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const [isVisible, setIsVisible] = useState(false)

    const listentoScroll = () => {
        const heightHidden = 250
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop
        windowScroll > heightHidden ? setIsVisible(true) : setIsVisible(false)
    }
    useEffect(() => {
      window.addEventListener('scroll', listentoScroll)
    }, [])
    
    return (
    <>
  <footer>
    <Container>
        <Row>
            <Col sm={6} lg={3}>
            <div className="text-center">
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>For Order Call on Following Number</p>
                <p>
                  <Link to="tel:9998887777" className="calling">
                    999-888-7777
                  </Link>
                </p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Follow Us on Following Links</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="/">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy-right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      ©  <span>Top Burgers</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
        </Row>
    </Container>
  </footer>
  {isVisible && (<div className="scroll-top" onClick={handleScrollTop}>
  <i class="bi bi-arrow-up"></i>
  </div>)}
  
    </>
    )
}