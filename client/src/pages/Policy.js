import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Data Collection: We collect personal information for order processing and improving customer experience, with no sharing to third parties without consent.</p>
          <p>Data Security: We employ industry-standard security measures like encryption and firewalls to safeguard personal information.</p>
          <p>Cookies: We use cookies for enhanced browsing and personalized content, with user consent per our Cookie Policy.</p>
          <p>Third-Party Links: We're not responsible for the privacy practices of third-party websites linked on our site.</p>
          <p>Opt-Out Policy: Users can unsubscribe from promotional emails or marketing communications by following provided instructions.</p>
          <p>Data Retention: Personal information is retained only as long as necessary, with longer periods as required by law.</p>
          <p>Updates to Privacy Policy: Changes to our Privacy Policy will be notified by posting on this page.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
