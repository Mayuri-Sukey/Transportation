import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../../Components/Layouts/Card'

const Home3 = () => {

    const cardData = [
        {
          id: "0001",
          title: "Quality Products",
          paragraph: "Our commitment to excellence ensures top-notch quality across our diverse range.",
        },
        {
            id: "0001",
            title: "Innovative Solutions",
            paragraph: "Stay ahead with our forward-thinking and adaptive product offerings.",
          },
          {
            id: "0001",
            title: "Affordable Pricing",
            paragraph: "Experience cost-effective solutions with transparent and competitive pricing.",
          },
          {
            id: "0001",
            title: "Dependability",
            paragraph: "Count on our steadfast and dependable services, nurturing lasting partnerships.",
          },
          {
            id: "0001",
            title: "Product Diversity",
            paragraph: "Choose from a broad spectrum of products, tailored to meet varied requirements.",
          },
          {
            id: "0001",
            title: "Global Reach",
            paragraph: "Access international markets effortlessly through our well-established global network.",
          },
       
        // Add more mock data objects as needed
      ];
      
  return (
    <section className='Home3-Why_US'>
        <Container>
            <Row>
                <Col  lg={{span:8, offset:2,}} className="text-center">
                <h2  className="pt-5 pb-5 " >Why US</h2>
                
                </Col>
            </Row>

           
            <Row>
                
         
            {cardData.map((cardData, index)=>(
                    <Card  key ={index}
                    
                    title={cardData.title}
                    paragraph={cardData.paragraph}
                    
                    />
                ))}
             
              
            </Row>
        </Container>
      
    </section>
  )
}

export default Home3
