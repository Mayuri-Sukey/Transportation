import React from "react";
import { Col } from "react-bootstrap";
import "../../Styles/HomeStyle.css";
//import 'aos/dist/aos.css';

export default function Card({ title, paragraph, index }) {
  return (
    <>
      <Col lg={{ span: 4 }} md={{ span: 6 }} className="mb-4 whyUS-cards">
        <div class="Why_us" data-aos="flip-left">
          <div class="content">
            <p class="heading">{title}</p>
            <p class="para">{paragraph}</p>
          </div>
        </div>
      </Col>
    </>
  );
}
