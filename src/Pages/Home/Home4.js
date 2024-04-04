import React, { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";
import { SiSnapcraft } from "react-icons/si";
import { FaKitchenSet } from "react-icons/fa6";
import { MdAgriculture } from "react-icons/md";
import { IoPrintSharp } from "react-icons/io5";
import {motion} from "framer-motion"
import Product1 from "../../assets/Engineering_Goods.jpg";
import Product2 from "../../assets/product2.jpg";
import Product3 from "../../assets/product3.jpg";
import Product4 from "../../assets/product4.jpg";
import Product5 from "../../assets/product5.jpg";
import Product6 from "../../assets/product6.jpg";
import Product7 from "../../assets/product7.jpg";
import Product8 from "../../assets/product8.jpg";
import "../../Styles/Swiper.css";
import { Col, Container, Row } from "react-bootstrap";

const Home4 = () => {
  const [product, setProduct] = useState([
    {
      imageUrl: Product1,
      title: "Engineering Goods ",
      icon: <FcEngineering />,
    },
    {
      imageUrl: Product2,
      title: "Pharmaceutical & Healthcare",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Product3,
      title: "Indian Handicrafts",
      icon:<SiSnapcraft />,
    },
    {
      imageUrl: Product4,
      title: "Home & Kithchen Decor",
      icon: <FaKitchenSet />,
    },
    {
      imageUrl: Product5,
      title: "Agriculture & Processed Food",
      icon: <MdAgriculture />,
    },
    {
      imageUrl: Product6,
      title: "Printing & Packaging Solutions",
      icon: <IoPrintSharp />,
    },
    {
      imageUrl: Product7,
      title: "TExtile & Garments",
      icon: <IoPrintSharp />,
    },
    {
      imageUrl: Product8,
      title: "Jewelary & Games",
      icon: <MdOutlineHealthAndSafety />,
    },
  ]);

 
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
    <section className=" Our-Products overflow-hidden">
      {/* <Container> */}
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <motion.h2
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
              duration:1
            }}
            className="pt-5 pb-5 " >OUR PRODUCTS</motion.h2>
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
              delay:.2
            }}
            
            >Explore our company, your ultimate destination in India for a diverse range of high-quality products. Our team of experienced professionals
carefully selects each product to ensure top-notch quality. We take pride in exporting premium products. Explore our highlighted categories
below, and for more information on additional categories or products, feel free to contact us using the details provided. Your satisfaction is
our priority</motion.p>
          </Col>
        </Row>
        {/* <Row className="justify-content-center"> */}
          {/* <Col lg={{ span: 4 }} className="whyUS-cards"> */}
          <motion.div className="Product" 
          initial="hidden"
          variants={boxvariants}
          whileInView="visible"
          >
            {product.map((prodData, index) => (
              <motion.div key={index} className="" variants={listvariants}>
                <div>
                  <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 Shadow-lg">
                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                      <img
                        src={prodData.imageUrl}
                        alt="card-image"
                        class="object-cover w-full h-full "
                      />
                    </div>
                    <div class="p-6">
                      <div class="flex items-center justify-between mb-2">
                        <p
                          className="block font-sans text-[5px] font-normal antialiased  leading-relaxed"
                          style={{ color: "#000" }}
                        >
                          {prodData.title}
                        </p>
                        <p
                          class="block font-sans text-base antialiased font-large  leading-relaxed"
                          style={{ fontSize: "2rem" , color : "orange"}}
                        >
                          {prodData.icon}
                        </p>
                      </div>
                    </div>
                    <div class="p-6 pt-0">
                      <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button"
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          {/* </Col> */}
        {/* </Row> */}
      {/* </Container> */}
    </section>
  );
};

export default Home4;