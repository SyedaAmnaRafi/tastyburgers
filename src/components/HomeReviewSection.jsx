import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

function HomeReviewSection() {
  return (
    <>
      <section className="review-section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user-img">
                        <img src="../../src/assets/blog/review-author-1.jpg" alt="review-person" className="img-fluid" />
                    </div>
                    <p>
                    Absolutely love the food here! The burgers are juicy, the flavors are amazing, and the delivery is always on time. The mobile app is a game-changer with its seamless experience and great discounts!
                    </p>
                    <div className="item-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                    <h5>By Emma Johnson</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user-img">
                        <img src="../../src/assets/blog/review-author-2.jpg" alt="review-person" className="img-fluid" />
                    </div>
                    <p>
                    The quality of the meals is top-notch, and I’m impressed with the fast service. The app is super convenient, though it could use a few more features. Overall, a great experience!
                    </p>
                    <div className="item-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    </div>
                    <h5>By James Richardson </h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user-img">
                        <img src="../../src/assets/blog/review-author-3.jpg" alt="review-person" className="img-fluid" />
                    </div>
                    <p>
                    Hands down the best burgers I’ve had in ages! The freshness and taste are unmatched. Plus, saving 20% with the app is such a great bonus!
                    </p>
                    <div className="item-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                    <h5>Sophia Lewis</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                    <div className="user-img">
                        <img src="../../src/assets/blog/review-author-5.jpg" alt="review-person" className="img-fluid" />
                    </div>
                    <p>
                    Great food and super fast delivery. The app made ordering so easy, and the discount was a nice touch. Just wish there were more menu customization options.
                    </p>
                    <div className="item-rating">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    </div>
                    <h5>By Michael Thompson </h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomeReviewSection;
