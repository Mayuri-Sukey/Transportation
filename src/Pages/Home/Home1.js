import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/carosel1.jpg'
import img2 from '../../assets/carosel2.jpg'
import img3 from '../../assets/carosel3.jpg'


function Home1() {
  return (
    <>

    <Carousel>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100 carosel-img"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100  carosel-img"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100  carosel-img"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  )
}

export default Home1