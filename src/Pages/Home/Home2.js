import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const Home2 = () => {
  console.log("home2 component");

  return (
    <>
      <section className="Home2_welcome_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <motion.h2
            initial={{
   y:50,
   opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            transition={{
              duration:1
            }}>WELCOME TO MH NOCHANWALA EXPORTER</motion.h2>
              
              <motion.h3
            initial={{
   y:50,
   opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            transition={{
              duration:1,
              delay:.2
            }} className="pt-5">Sending a Smile across the borders</motion.h3>
              <motion.p
            initial={{
   y:50,
   opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            transition={{
              duration:1,
              delay:.3
            }}>
                Where we excel as importers and exporters in India, delivering
                quality standards as an ISO 9001:2015 Certified company. Explore
                our diverse range of high-quality products for seamless global
                trade. Your journey with us begins with excellence.
              </motion.p>
              <div>
                <Link to="/" className="btn order_now btn_red">
                  About Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className='bg_parallax_scroll'>

</section> */}
    </>
  );
};

export default Home2;
