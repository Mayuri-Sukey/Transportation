import React from 'react';
import img1 from "../../assets/carosel1.jpg";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner mb-4">
          <div className="carousel-item">
            <div className="page-header min-vh-75 m-3 border-radius-xl" style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover'}}>
              <span className="mask bg-gradient-dark"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 my-auto">
                    <h4 className="text-white mb-0 fadeIn1 fadeInBottom">Pricing Plans</h4>
                    <h1 className="text-white fadeIn2 fadeInBottom">Work with the rockets</h1>
                    <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header min-vh-75 m-3 border-radius-xl" style={{backgroundImage: "url('https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-1-min.jpg')"}}>
              <span className="mask bg-gradient-dark"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 my-auto">
                    <h4 className="text-white mb-0 fadeIn1 fadeInBottom">Our Team</h4>
                    <h1 className="text-white fadeIn2 fadeInBottom">Work with the best</h1>
                    <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can’t have both.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="page-header min-vh-75 m-3 border-radius-xl" style={{backgroundImage: "url('https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-2-min.jpg')"}}>
              <span className="mask bg-gradient-dark"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 my-auto">
                    <h4 className="text-white mb-0 fadeIn1 fadeInBottom">Office Places</h4>
                    <h1 className="text-white fadeIn2 fadeInBottom">Work from home</h1>
                    <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">You’re spending time to save money when you should be spending money to save time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-vh-75 position-absolute w-100 top-0">
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon position-absolute bottom-50" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon position-absolute bottom-50" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;
