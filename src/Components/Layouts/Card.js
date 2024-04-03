import React from 'react'
import { Col } from 'react-bootstrap'
import "../../Styles/HomeStyle.css"
//import 'aos/dist/aos.css';

export default function Card({title,paragraph,index}) {
  return (
    <>
      {/* <div class="card-container">
  <div class="card">
  <div class="img-content">
   Quality Products
  </div>
  <div class="content">
    <p class="heading">Quality Products</p>
    <p>
      Our commitment to excellence ensures top-notch quality across our diverse range.
    </p>
  </div>
</div>
</div> */}

<Col lg={{span: 4}} className="mb-4 whyUS-cards">
<div class="Why_us" data-aos="flip-left">
  <div class="content">
    <p class="heading">{title}</p>
    <p class="para">
        {paragraph}
        </p>
  </div>
</div>
</Col>
    </>
  
  )
}
