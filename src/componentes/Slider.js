import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../images/carousel1.JPG';
import carousel3 from '../images/carousel3.JPG';
import carousel4 from '../images/carousel4.JPG';


const Slider = () => {
    return ( 
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




        </>
     );
}
 
export default Slider;