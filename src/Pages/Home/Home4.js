import React, { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";
import Carosel from "../../assets/Engineering_Goods.jpg";
import "../../Styles/Swiper.css";
import { Col, Container, Row } from "react-bootstrap";

const Home4 = () => {
  const [product, setProduct] = useState([
    {
      imageUrl: Carosel,
      title: "Engineering Goods 1",
      icon: <FcEngineering />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      imageUrl: Carosel,
      title: "Engineering Goods 2",
      icon: <MdOutlineHealthAndSafety />,
    },
  ]);

  console.log(product);
  return (
    <section>
      {/* <Container> */}
        {/* <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2 className="pt-5 pb-5 ">Why US</h2>
          </Col>
        </Row> */}
        {/* <Row className="justify-content-center"> */}
          {/* <Col lg={{ span: 4 }} className="whyUS-cards"> */}
          <div className="Product">
            {product.map((prodData, index) => (
              <div key={index}>
                <div>
                  <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
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
                          className="block font-sans text-base antialiased font-large leading-relaxed"
                          style={{ color: "#000", fontWeight: "bold" }}
                        >
                          {prodData.title}
                        </p>
                        <p
                          class="block font-sans text-base antialiased font-large leading-relaxed"
                          style={{ fontSize: "2rem" }}
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
              </div>
            ))}
            </div>
          {/* </Col> */}
        {/* </Row> */}
      {/* </Container> */}
    </section>
  );
};

export default Home4;
