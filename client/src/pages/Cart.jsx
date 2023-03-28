import React from "react";

import { MdDeleteForever } from "react-icons/md";

import Container from "../components/Container";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Meta title="giỏ hàng" />
      <BreadCrumb title="giỏ hàng" />

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Sản phẩm</h4>
              <h4 className="cart-col-2">Giá</h4>
              <h4 className="cart-col-3">Số lượng</h4>
              <h4 className="cart-col-4">Tổng cộng</h4>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img className="img-fluid" src="/images/watch.jpg" alt="" />
                </div>
                <div className="w-75">
                  <p>Apple</p>
                  <p>
                    <b>Kích cỡ:</b> 4.7"
                  </p>
                  <p>
                    <b>Màu:</b> Xanh
                  </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$100</h5>
              </div>
              <div className="cart-col-3">
                <div className="w-50">
                  <input
                    type="number"
                    className="form-control"
                    style={{ height: "40px" }}
                  />
                </div>
              </div>
              <div className="cart-col-4  d-flex align-items-center gap-30">
                <h5 className="price">$100</h5>
                <div className="delete">
                  <MdDeleteForever />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex align-items-baseline justify-content-between">
              <div className="d-flex flex-column gap-20 w-25">
                <Link to="/store" className="button text-center">
                  Tiếp tục mua sắm
                </Link>
                <div className="form-floating">
                  <textarea
                    name=""
                    id="note"
                    className="form-control w-100"
                    rows="3"
                    placeholder="Ghi chú cho nhân viên"
                  ></textarea>
                  <label htmlFor="note">Ghi chú cho nhân viên</label>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h4>Tổng cộng: $1000</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit, nam.
                </p>
                <Link to="/checkout" className="button w-50 text-center">
                  Thanh toán
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
