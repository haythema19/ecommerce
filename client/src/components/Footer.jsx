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
                <h3 className="mb-0 text-white">Đăng ký nhận thông tin</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Địa chỉ email của bạn"
                  aria-label="Địa chỉ email của bạn"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Đăng kí
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
              <h4 className="text-white">Liên hệ với chúng tôi</h4>
              <div>
                <Link to="/" className="text-white py-2 mb-1">
                  Store
                </Link>
                <address className="text-white fs-6">
                  39 P. Nguyễn Hữu Huân, Lý Thái Tổ, Hoàn Kiếm, Hà Nội
                  <br /> Việt Nam
                </address>
                <a
                  className="text-white mt-4 d-block mb-3"
                  href="tel:914563242321"
                >
                  +84 456 324 2321
                </a>
                <a
                  className="text-white mt-3 d-block mb-1"
                  href="mailto:demo@example.com"
                >
                  demo@example.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                  <a className="text-white" href="">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <SiTiktok className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <SiZalo className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Chính sách</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Chính sách trả hàng
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Chính sách giao hàng
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Chính sách bảo hành
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">Dịch vụ</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="about" className="text-white py-2 mb-1">
                  Về chúng tôi
                </Link>
                <Link to="/contact" className="text-white py-2 mb-1">
                  Liên hệ
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Tin tức
                </Link>
                <Link to="faq" className="text-white py-2 mb-1">
                  Faq
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white">Danh mục</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Watch
                </Link>
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
