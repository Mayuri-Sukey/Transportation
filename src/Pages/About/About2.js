import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import about5 from "../../assets/about5.jpg";

const About2 = () => {
  return (
    <>
      <section className='about2'>
        <Container>
          <Row>
          <Col lg={{span:5, offset:1,}} className="text-center">
            <img src={about5} alt="burger" className="about2_img" data-aos="fade-right"/>
         </Col>

         <Col lg={{span: 5}}>
            <div className="text-center " data-aos="fade-left">
              <p>Welcome to MH Nochanwala Exporter, a trusted leader in international trade based in India. Committed to excellence, we take pride in offering a diverse range of top-notch products that cater to global markets. Understanding the significance of quality and reliability in international business, our dedicated team ensures seamless experiences from sourcing to delivery</p><br></br>
              <p>Driven by a passion for global connectivity, we navigate the complexities of international trade with expertise. Our tireless efforts in building and strengthening partnerships contribute to long-lasting relationships with clients and suppliers. As MH Nochanwala Exporter grows, our commitment to superior products and services remains unwavering</p><br></br>
              <p>Join us in bridging gaps, connecting markets, and contributing to the success of businesses worldwide. Choose MH Nochanwala Exporter for unparalleled quality, reliability, and a steadfast commitment to your international trade needs.</p>
            </div>
          </Col>

          </Row>
        </Container>
   
      </section>
    </>
  )
}

export default About2
