import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/carosel1.jpg";
import img2 from "../assets/carosel2.jpg";
import img3 from "../assets/carosel3.jpg";
import "./Test.css";



const Test = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100 carosel-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className="carouserl-caption-b">
            <h3>Sending a Smile across the borders </h3>
            <p>We are a leading Importer and  Exporter </p>
            <p>Proudly Certified with ISO 9001:2015 Standard</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
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
          <img
            style={{ height: "100vh" }}
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
    </div>
  );
};

export default Test;
