import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../Components/Layouts/Card";
import {motion} from "framer-motion"
const Home3 = () => {
  const cardData = [
    {
      id: "0001",
      title: "Quality Products",
      paragraph:
        "Our commitment to excellence ensures top-notch quality across our diverse range.",
    },
    {
      id: "0001",
      title: "Innovative Solutions",
      paragraph:
        "Stay ahead with our forward-thinking and adaptive product offerings.",
    },
    {
      id: "0001",
      title: "Affordable Pricing",
      paragraph:
        "Experience cost-effective solutions with transparent and competitive pricing.",
    },
    {
      id: "0001",
      title: "Dependability",
      paragraph:
        "Count on our steadfast and dependable services, nurturing lasting partnerships.",
    },
    {
      id: "0001",
      title: "Product Diversity",
      paragraph:
        "Choose from a broad spectrum of products, tailored to meet varied requirements.",
    },
    {
      id: "0001",
      title: "Global Reach",
      paragraph:
        "Access international markets effortlessly through our well-established global network.",
    },

    // Add more mock data objects as needed
  ];


  const boxvariants = {
    hidden: {
      y: -10 // Adjust this value as needed
    },
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
        duration: 1
      }
    }
  };
  
  const listvariants = {
    hidden: {
      y: 10, // Adjust this value as needed (opposite sign of the boxvariants)
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  



  return (
    <section className="Home3-Why_US">
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
            }}
            className="pt-5 pb-5 ">Why US</motion.h2>
          </Col>
        </Row>

        <Row>
          {cardData.map((cardData, index) => (
            <Card
              key={index}
              title={cardData.title}
              paragraph={cardData.paragraph}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Home3;
