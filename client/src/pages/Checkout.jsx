import React from "react";
import { Link } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const CheckOut = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name title">Ecommerce</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                    <Link to="/cart" className="total-price">
                      Giỏ hàng
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item" aria-current="page">
                    thông tin
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    vận chuyển
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    hoàn tất thanh toán
                  </li>
                </ol>
              </nav>
              <h4 className="title total mt-4">Thông tin liên lạc</h4>
              <p className="user-details total">Navdeep (example@gmail.com)</p>
              <form
                action=""
                className="d-flex gap-20 flex-wrap justify-content-between"
              >
                <h4 className="title mb-0 mt-3 total">Địa chỉ giao hàng</h4>
                <div className="w-100">
                  <div className="form-floating mb-3">
                    <select
                      name=""
                      id="country"
                      defaultValue={"country"}
                      className="form-control form-select"
                    >
                      <option value="country">Quốc gia</option>
                    </select>
                    <label htmlFor="country">Quốc gia</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Họ"
                    />
                    <label htmlFor="firstName">Họ</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Tên"
                    />
                    <label htmlFor="lastName">Tên</label>
                  </div>
                </div>
                <div className="w-100">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                    />
                    <label htmlFor="address">Địa chỉ</label>
                  </div>
                </div>
                <div className="w-100">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="text"
                      name="address2"
                      id="address2"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                    <label htmlFor="address2">
                      Apartment, suite, etc. (optional)
                    </label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                    />
                    <label htmlFor="city">Thành phố</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-3">
                    <select
                      name=""
                      id="state"
                      defaultValue={"state"}
                      className="form-control form-select"
                    >
                      <option value="state">Tỉnh</option>
                    </select>
                    <label htmlFor="state">Chọn tỉnh</label>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="form-floating mb-3">
                    <CustomInput
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="ZIP code"
                    />
                    <label htmlFor="zipcode">Mã bưu chính</label>
                  </div>
                </div>
                <div className="w-100 mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to="/cart"
                      className="text-dark d-flex align-items-center gap-5"
                    >
                      <BsChevronLeft />
                      Quay lại giỏ hàng
                    </Link>
                    <Link to="" className="button">
                      Tiếp tục
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="d-flex align-items-center justify-content-between border-bottom py-4">
              <div className="w-75 d-flex align-items-center gap-20">
                <div className="w-25 position-relative badge-image">
                  <span className="badge position-absolute">1</span>
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div>
                  <h5 className="title total">Sản phẩm</h5>
                  <p className="mb-0 total-price">S / Xanh</p>
                </div>
              </div>
              <h5 className="total-price">$100</h5>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex align-items-center justify-content-between">
                <p className="total">Tổng:</p>
                <p className="total-price">$10</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 total">Vận chuyển:</p>
                <p className="mb-0 total-price">$10</p>
              </div>
            </div>
            <div></div>
            <div className="d-flex align-items-center justify-content-between border-bottom py-4">
              <h4 className="total mb-0">Tổng cộng:</h4>
              <h5 className="total-price mb-0">$999</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
