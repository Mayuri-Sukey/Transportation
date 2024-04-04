import React from "react";
import Layout from "../../Components/Layouts/Layout";

const Management = () => {
  return (
    <div>
      <Layout>
        <div className="management-main-div">
          <div>
            <div className="bg-gray-100 px-6 py-12 font-[sans-serif]">
              <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <img
                      src="https://readymadeui.com/management-img.webp"
                      alt="Image"
                      className="rounded-md object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-[#195B68] mb-4 ">
                      Management Team
                    </h2>
                    <p className="text-gray-700 text-[15px] text-justify leading-6">
                      At our company, success is propelled by a dedicated and
                      experienced management team committed to steering the
                      company towards new heights. Each member brings a wealth
                      of expertise, passion, and leadership to their respective
                      roles, ensuring the seamless execution of our vision and
                      mission. Guided by a strategic mindset, our management
                      team fosters innovation, collaboration, and a
                      customer-centric approach. Together, we strive to lead the
                      way in the industry, navigating challenges, and creating
                      opportunities for growth. Discover the individuals who
                      form the backbone of our organization, driving excellence
                      and shaping the future of international trade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Management;
