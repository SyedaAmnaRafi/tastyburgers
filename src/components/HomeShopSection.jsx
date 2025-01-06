import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeShopSection() {
  return (
    <>
      <section className="shop-section">
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='mb-5 mb-lg-0 text-lg-start text-center'>
                <h4>Download mobile App and</h4>
                <h2>save up to 20%</h2>
                <p>Save more while enjoying your favorite meals with our exclusive mobile app! Download the app today and unlock amazing deals, including up to 20% off on your orders.</p>
                <Link to="/">
                <img src="../../src/assets/shop/appstore.png" alt="store-img" className='img-fluid app-store-img me-3' />
                </Link>
                <Link to="/">
                <img src="../../src/assets/shop/googleplay.png" alt="googleplay-img" className='img-fluid app-store-img me-3' />
                </Link>
                </Col>
                <Col lg={6}>
                <img src="../../src/assets/shop/e-shop.png" alt="e-shop" className='img-fluid' />
                </Col>
            </Row>
        </Container>
      </section>
      <section className="brand-section">
        <Container>
          <Row>
          <Carousel >
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-between'>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-11.png" alt="brand-1" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-12.png" alt="brand-2" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-13.png" alt="brand-3" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-14.png" alt="brand-4" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-15.png" alt="brand-5" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-16.png" alt="brand-6" className='img-fluid ' /> 
            </div>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-between'>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-13.png" alt="brand-3" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-14.png" alt="brand-4" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-15.png" alt="brand-5" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-16.png" alt="brand-6" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-17.png" alt="brand-7" className='img-fluid ' /> 
            </div>
            <div className="brand-image">
              <img src="../../src/assets/brands/brand-18.png" alt="brand-8" className='img-fluid ' /> 
            </div>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomeShopSection