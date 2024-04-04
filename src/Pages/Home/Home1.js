import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/carosel1.jpg";
import img2 from "../../assets/carosel2.jpg";
import img3 from "../../assets/carosel3.jpg";
import SocialMedia from "../../Components/Layouts/SocialMedia";


function Home1() {
  console.log("home1 component")
  return (
    <section className="carosel">
    <SocialMedia/>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100 carosel-img"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Sending a Smile across the borders
</h3>
        <p>We are a leading Importer and Exporter
Proudly Certified with ISO 9001:2015 Standard</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100  carosel-img"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>As leading importers and exporters in India, we prioritize quality standards in all our endeavors</h3>
        <p>Explore our
extensive range of premium products meticulously crafted for seamless global trade. Your journey with us
commences with a commitment to excellence, ensuring your satisfaction every step of the way. Partner with
us for a reliable and rewarding trading experience
</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100  carosel-img"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Sending a Smile across the borders</h3>
        <p>
        We are a leading Importer and Exporter
Proudly Certified with ISO 9001:2015 Standard
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </section>
  )
}

export default Home1;
