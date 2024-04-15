import React from "react";
import FooterBottom from "./FooterBottom.js";
import FooterMiddle from "./FooterMiddle.js";
import FooterTop from "./FooterTop.js";

const Footer = () => {
  return (
    <div className="font-titleFont">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};

export default Footer;
