import { Col, Container, Row } from "react-bootstrap"

export const HomePromotionSection = () => {
 return (
    <>
    <section className="promotion-section">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="text-center mb-5 mb-lg-0">
                <img src="../../src/assets/promotion/pro.png" alt="promotion-img"  className="img-fluid"/>
                </Col>
                <Col lg={6} className="px-5">
                <h2>Nothing brings people together like a good burger</h2>
                <p>We are passionate about creating burgers that unite. Each bite combines fresh ingredients, bold flavors, and a touch of creativity to spark joy and connection. Whether it's a family gathering, a friendly hangout, or a solo indulgence, our burgers make every moment special.</p>
                <ul>
                    <li><p>Made with the freshest, high-quality ingredients for unbeatable taste.</p></li>
                    <li><p>Perfect for family meals, friendly get-togethers, or quick bites.</p></li>
                    <li><p>Offers a variety of flavors to cater to everyone's preferences.</p></li>
                    <li><p>Crafted with love to bring smiles and satisfy cravings.</p></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="bg-parallax-scroll"></section>
    </>
 )
}