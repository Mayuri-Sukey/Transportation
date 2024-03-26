import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Home2 = () => {
  return (
    <>
    <section className='Home2_welcome_section'>
      <Container>
        <Row>
        <Col lg={{span:8, offset:2,}} className="text-center">
                <h2>WELCOME TO MH NOCHANWALA EXPORTER</h2>
                <h3 className='pt-5'>Sending a Smile across the borders</h3>
                <p>Where we excel as importers and exporters in India, delivering quality standards as an ISO 9001:2015 Certified company. Explore our diverse range of high-quality products for seamless global trade. Your journey with us begins with excellence.</p>

                <Link to="/"  className = "btn order_now btn_red">
  About Us</Link>
                </Col>
        </Row>
      </Container>
      </section>

{/* <section className='bg_parallax_scroll'>

</section> */}
</>
  )
}

export default Home2
