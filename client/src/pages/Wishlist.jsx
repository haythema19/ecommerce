import React from "react";

import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title="danh sách yêu thích" />
      <BreadCrumb title="danh sách yêu thích" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="cross position-absolute img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="sub-title price">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="cross position-absolute img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="sub-title price">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="cross position-absolute img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="sub-title price">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="cross position-absolute img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="sub-title price">$100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="cross position-absolute img-fluid"
                src="images/cross.svg"
                alt=""
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="images/watch.jpg"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="sub-title price">$100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
