import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion' 


const Home2 = () => {
  return (
    <>
    <section className='Home2_welcome_section'>
      <Container>
        <Row>
        <Col lg={{span:8, offset:2,}} className="text-center">
                <motion.h2
                initial={{
                  y:100,
                  opacity:0
                }}
                whileInView={
                  {
                    y:1,
                    opacity:1
                  }
                }
                transition={{
                  duration:1
                }}

                >WELCOME TO MH NOCHANWALA EXPORTER</motion.h2>
                <motion.h3 className='pt-5'
                 initial={{
                  y:50,
                  opacity:0
                }}
                whileInView={
                  {
                    y:1,
                    opacity:1
                  }
                }
                transition={{
                  duration:1,
                  delay:.2
                }}
                
                >Sending a Smile across the borders</motion.h3>
                <motion.p
               initial={{
                y:50,
                opacity:0
              }}
              whileInView={
                {
                  y:1,
                  opacity:1
                }
              }
              transition={{
                duration:1,
                delay:.4
              }} 
                
                >Where we excel as importers and exporters in India, delivering quality standards as an ISO 9001:2015 Certified company. Explore our diverse range of high-quality products for seamless global trade. Your journey with us begins with excellence.</motion.p>
<motion.div 
 initial={{
  y:50,
  opacity:0
}}
whileInView={
  {
    y:1,
    opacity:1
  }
}
transition={{
  duration:1,
  delay:.5
}} 
>
<Link to="/"  className = "btn order_now btn_red">
  About Us</Link>
</motion.div>
               
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
