import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Infinity Super Shop, your ultimate destination for quality products and exceptional shopping experiences. At Infinity Super Shop, we're dedicated to providing our customers with a diverse range of products across various categories, including electronics, apparel, home appliances, sports & fitness, beauty & personal care, books & stationery, furniture & decor, kitchen & dining, toys & games, and automotive. With a commitment to delivering top-notch customer service and unparalleled value, we strive to exceed your expectations every time you shop with us. Our team is passionate about curating the finest selection of products from leading brands, ensuring that you find exactly what you need to enhance your lifestyle. Whether you're shopping for yourself or searching for the perfect gift, Infinity Super Shop is here to make your shopping experience seamless and enjoyable. Thank you for choosing Infinity Super Shop – where endless possibilities await!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
