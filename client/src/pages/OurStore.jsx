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
      <Meta title="tất cả sản phẩm" />
      <BreadCrumb title="tất cả sản phẩm" />

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mt-0">
              <h3 className="filter-title">Mua sắm theo danh mục</h3>
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
              <h3 className="filter-title">Lọc bởi</h3>
              <div>
                <h5 className="sub-title">Tình trạng</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="inStock"
                    />
                    <label className="form-check-label" htmlFor="inStock">
                      Còn hàng (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="outStock"
                    />
                    <label className="form-check-label" htmlFor="outStock">
                      Hết hàng (0)
                    </label>
                  </div>
                </div>

                <h5 className="sub-title">Giá</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="from"
                      placeholder="From"
                    />
                    <label htmlFor="from">Từ</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="to"
                      placeholder="To"
                    />
                    <label htmlFor="to">Đến</label>
                  </div>
                </div>

                <h5 className="sub-title">Màu</h5>
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

                <h5 className="sub-title">Kích cỡ</h5>
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
              <h3 className="filter-title">Thẻ sản phẩm</h3>
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
              <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
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
                    Sắp xếp:
                  </p>
                  <select
                    name=""
                    id=""
                    className="form-control form-select"
                    defaultValue={"manual"}
                  >
                    <option value="manual">Mặc định</option>
                    <option value="best-selling">Bán chạy nhất</option>
                    <option value="title-ascending">Tên: A-Z</option>
                    <option value="title-descending">Tên: Z-A</option>
                    <option value="price-ascending">Giá: tăng dần</option>
                    <option value="price-descending">Giá: giảm dần</option>
                    <option value="created-ascending">Mới nhất</option>
                    <option value="created-descending">Cũ nhất</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 sản phẩm</p>
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
