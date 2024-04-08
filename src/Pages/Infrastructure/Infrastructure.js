import React from "react";
import Layout from "../../Components/Layouts/Layout";
import infrastructureimg from "../../assets/infrastructure.jpg";
import { motion } from "framer-motion";

const Infrastructure = () => {
  return (
    <>
      <Layout>
        <div className="mt-10">
          <div>
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 font-[sans-serif]">
              <motion.img
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                src={infrastructureimg}
                className="w-full md:w-1/2 rounded-lg infra-img transition-transform duration-300 transform hover:scale-105"
                alt="Image description"
              />

              <motion.div
                initial={{
                  x: 50,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Infrastructure
                </h2>
                <p className="text-base text-gray-600 text-justify">
                  At the heart of what we do is our strong infrastructure
                  supporting our commitment to doing great things in global
                  trade. Our warehouses are smartly set up to keep things
                  organized, and we have a special lab to make sure everything
                  we offer is really good. Our great communication and shipping
                  systems, part of our infrastructure, help us easily connect
                  with friends and customers all around the world, making sure
                  everything happens smoothly and safely.
                </p>
                <br />
                <p className="text-base text-gray-600 text-justify">
                  This whole setup is like the backbone of our promise to give
                  you really good services in global trade. You can trust our
                  infrastructure to make things easy, efficient, and dependable.
                  At our company, we're here to make your global business
                  journey simple, secure, and top notch in every way.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Infrastructure;
