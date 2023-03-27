import React from "react";

import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Colors from "../components/Colors";

const CompareProduct = () => {
  return (
    <div>
      <Meta title="Compare Product" />
      <BreadCrumb title="Compare Product" />

      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="img-fluid position-absolute cross"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img className="img-fluid" src="images/tab.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="price mb-3">$999</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand: </h5>
                  <p className="mb-0">Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type: </h5>
                  <p className="mb-0">Tablet</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Avilablity: </h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Color: </h5>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h5>Size: </h5>
                  <div className="d-flex gap-10">
                    <p>6.1"</p>
                    <p>6.7"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="img-fluid position-absolute cross"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img className="img-fluid" src="images/tab.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="price mb-3">$999</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand: </h5>
                  <p className="mb-0">Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type: </h5>
                  <p className="mb-0">Tablet</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Avilablity: </h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Color: </h5>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h5>Size: </h5>
                  <div className="d-flex gap-10">
                    <p>6.1"</p>
                    <p>6.7"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="img-fluid position-absolute cross"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img className="img-fluid" src="images/tab.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="price mb-3">$999</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand: </h5>
                  <p className="mb-0">Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type: </h5>
                  <p className="mb-0">Tablet</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Avilablity: </h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Color: </h5>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h5>Size: </h5>
                  <div className="d-flex gap-10">
                    <p>6.1"</p>
                    <p>6.7"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="img-fluid position-absolute cross"
                src="images/cross.svg"
                alt=""
              />
              <div className="product-card-image">
                <img className="img-fluid" src="images/tab.jpg" alt="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 8GB RAM 7 Inch with Wi-fi 6 + 5G Tablet
                </h5>
                <h6 className="price mb-3">$999</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand: </h5>
                  <p className="mb-0">Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type: </h5>
                  <p className="mb-0">Tablet</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Avilablity: </h5>
                  <p className="mb-0">In stock</p>
                </div>
                <div className="product-detail">
                  <h5 className="mb-0">Color: </h5>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h5>Size: </h5>
                  <div className="d-flex gap-10">
                    <p>6.1"</p>
                    <p>6.7"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompareProduct;
