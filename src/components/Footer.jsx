import React from "react";
import { Link } from "react-router-dom";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SiZalo, SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="" />
                <h3 className="mb-0 text-white">Sign up for newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div>
                <Link className="text-white py-2 mb-1">Demo Store</Link>
                <address className="text-white fs-6">
                  No. 1259 Freedom. New York, 1111 <br /> United States
                </address>
                <a
                  className="text-white mt-4 d-block mb-3"
                  href="tel:914563242321"
                >
                  +91-4563242321
                </a>
                <a
                  className="text-white mt-3 d-block mb-1"
                  href="mailto:demo@example.com"
                >
                  demo@example.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                  <a href="">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="">
                    <SiTiktok className="fs-4" />
                  </a>
                  <a href="">
                    <SiZalo className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Terms Of Service</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
                <Link to="/blogs" className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Quick Links </h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center mb-0">
                &copy; {new Date().getFullYear()}; Powered by zeno{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
