import { Col, Container, Row } from "react-bootstrap"
import burger from '../../src/assets/hero/hero-2.png'
import { Link } from "react-router-dom"


export const HomeHeroSection = () => {
    return (
        <>
       <section className="hero-section">
        <Container>
            <Row>
                <Col lg={7} className="mb=5 mb-lg=0">
                <div className="position-relative">
                    <img src={burger} alt="hero-img" className="img-fluid" />
                    <div className="price-badge">
                        <div className="price-text">
                        <h4 className="burger-text1">Only</h4>
                        <h4 className="burger-text2">$6.99</h4>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={5}>
                <div  className="hero-text text-center">
                   <h1 className="text-white">New Burger</h1>
                   <h2 className="text-white">With Onion</h2>
                   <p className="text-white">A mouthwatering new burger packed with juicy flavors and a zesty onion twist!</p>
                   <Link to="/" className="btn order-now">Order Now</Link>
                </div>
                </Col>
            </Row>
        </Container>
       </section>
        </>
    )
}