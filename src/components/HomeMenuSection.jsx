import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const HomeMenuSection = () => {
  const burgerData = useLoaderData();
  console.log(burgerData);

  return (
    <>
      <section className="menu-section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Our Crazy Burgers</h2>
              <p>
                Our Crazy Burgers are a flavor-packed adventure, crafted with
                bold ingredients and creative twists that push the boundaries of
                taste. Each bite delivers an explosion of freshness, quality,
                and pure burger bliss!
              </p>
            </Col>
          </Row>
          <Row>
            {burgerData.map((curBurger) => (
              <MenuItem key={curBurger.id} curBurger={curBurger} />
            ))}
          </Row>
          <Row>
            <Col sm={6} lg={5}>
              <div className="ads-box ad-img1  mb-5 mb-md-0">
                <h4>GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn-red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads-box ad-img2">
                <h4>GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn-red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
