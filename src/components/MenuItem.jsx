import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Stars } from "./Stars";

export const MenuItem = ({ curBurger }) => {
  const { id, paragraph, title, image_url, price, rating } = curBurger;
  return (
    <>
      <Col sm={6} lg={4} xl={3} className="mb-4">
        <Card className="overflow-hidden">
          <div className="overflow-hiddeb">
            <Card.Img variant="top" src={image_url}  className="img-fluid"/>
          </div>

          <Card.Body>

            <div className="d-flex align-items-center justify-content-between">
              {/* <div className="item-ratimg">{rating}</div> */}
              <div className="item-rating"> <Stars rating ={rating} /></div>
              <div className="wishlist">
              <i class="bi bi-heart-fill"></i>
              </div>
            </div>

            <Card.Title>{title}</Card.Title>
            <Card.Text>{paragraph}</Card.Text>

            <div  className="d-flex align-items-center justify-content-between">
              <div className="menu-price">
                <h5 className="mb-0">${price}</h5>
              </div>
              <div className="add-to-cart">
                <Link to="/">
                  <i class="bi bi-bag me-2"></i>
                  Add To Cart
                </Link>
              </div>
            </div>

          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
