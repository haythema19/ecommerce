import React from "react";

import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src="images/watch.jpg" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand text-danger">Samsung </h5>
            <h6 className="title">Samsung Galaxy S23 Mobile Phone; Sim...</h6>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span>
              &nbsp;&nbsp;
              <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">2</span>:
                <span className="badge rounded-circle p-2 bg-danger">3</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Số lượng: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link to="" className="button">
              Thêm vào giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
