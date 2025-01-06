import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Pizza from "../../src/assets/about/pizza.png";
import Salad from "../../src/assets/about/salad.png";
import Delivery from "../../src/assets/about/delivery-bike.png";

const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `At Top Burgers, our mission is to provide high-quality, delicious food that exceeds expectations. We focus on delivering fresh, original dishes that are crafted with care, ensuring every bite is full of flavor and satisfaction.`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `We are dedicated to using only the finest ingredients, ensuring our burgers, pizzas, salads, and other dishes maintain top-notch quality. Every meal is prepared with attention to detail, offering a taste you can trust.`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `We understand that great food should reach you quickly and hot. Our commitment to fast and reliable delivery ensures your favorite meals arrive on time, so you can enjoy them wherever you are.`,
    },
    // Add more mock data objects as needed
  ];

export const HomeAboutSection = () => {
   
    return (
        <>
         <section className="about-section">
            <Container>
                <Row>
                    <Col lg={{span:8 , offset:2}} className="text-center">
                    <h2>The burger tastes better when you eat it with your family</h2>
                    <p>Our burger isn’t just a meal—it’s an experience best shared with the people who matter most. Bite into the flavor, laugh together, and make every family moment unforgettable.</p>
                    <Link to="/" className="btn order-now">Explore Full Menu</Link>
                    </Col>
                </Row>
            </Container>
         </section>
         <section className="about-info">
            <Container>
                <Row className="justify-content-md-center">
                    {mockData.map((cardData, index) => (
                        <Col lg={4} md={6} key={index} className="mb=4 mb-md=0">
                            <div className="about-card text-center">
                                <div className="about-img">
                                   <img src={cardData.image} alt="" className="img-fluid"/>
                                </div>
                                <h4 className="about-title">{cardData.title}</h4>
                                <p className="about-desc">{cardData.paragraph}</p>
                            </div>
                        </Col>
                    
                    )
                    )}

                </Row>
            </Container>
         </section>
        </>
    )
}