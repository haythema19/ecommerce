import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";

import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title="our store" />
      <BreadCrumb title="our store" />

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mt-0">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="inStock"
                    />
                    <label className="form-check-label" for="inStock">
                      In stock (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="outStock"
                    />
                    <label className="form-check-label" for="outStock">
                      Out of stock (0)
                    </label>
                  </div>
                </div>

                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="from"
                      placeholder="From"
                    />
                    <label htmlFor="from">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="to"
                      placeholder="To"
                    />
                    <label htmlFor="to">To</label>
                  </div>
                </div>

                <h5 className="sub-title">Colors</h5>
                <div className="d-flex flex-wrap">
                  <ul className="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size-1"
                    />
                    <label className="form-check-label lh-" htmlFor="size-1">
                      S (9)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size-2"
                    />
                    <label className="form-check-label lh-1" htmlFor="size-2">
                      M (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size-3"
                    />
                    <label className="form-check-label lh-1" htmlFor="size-3">
                      L (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size-4"
                    />
                    <label className="form-check-label lh-1" htmlFor="size-4">
                      XL (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size-5"
                    />
                    <label className="form-check-label lh-1" htmlFor="size-5">
                      XXL (4)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Headphone
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Laptop
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Watch
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Tablet
                </span>
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Smartphone
                </span>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$99</b>
                  </div>
                </div>
                <div className="random-products mt-3 d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$99</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort by:
                  </p>
                  <select className="form-control form-select">
                    <option value="manual" selected>
                      Feature
                    </option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Từ A-Z</option>
                    <option value="title-descending">Từ Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex align-items-center grid gap-10">
                    <img
                      src="images/gr.svg"
                      className="img-fluid d-block"
                      alt=""
                      onClick={() => {
                        setGrid(3);
                      }}
                    />
                    <img
                      src="images/gr2.svg"
                      className="img-fluid d-block"
                      alt=""
                      onClick={() => {
                        setGrid(6);
                      }}
                    />
                    <img
                      src="images/gr3.svg"
                      className="img-fluid d-block"
                      alt=""
                      onClick={() => {
                        setGrid(4);
                      }}
                    />
                    <img
                      src="images/gr4.svg"
                      className="img-fluid d-block"
                      alt=""
                      onClick={() => {
                        setGrid(12);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
