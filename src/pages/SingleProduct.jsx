import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { CiRuler } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";

import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Colors from "../components/Colors";

const SingleProduct = () => {
  const props = {
    width: 590,
    height: 600,
    zoomWidth: 600,
    img: "/images/watch3.webp",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text: ", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15 justify-content-center">
              <div>
                <img className="img-fluid" src="/images/watch.jpg" alt="" />
              </div>
              <div>
                <img className="img-fluid" src="/images/watch.jpg" alt="" />
              </div>
              <div>
                <img className="img-fluid" src="/images/watch.jpg" alt="" />
              </div>
              <div>
                <img className="img-fluid" src="/images/watch.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids headphone bulk 10 pack multi colored for studient
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price mb-0">$100</p>
                <div className="d-flex align-items-center gap-10 py-2">
                  <ReactStars
                    count={5}
                    size={20}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a href="#review" className="review-btn">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Havels</p>
                </div>
                <div className="d-flex flex-column my-3">
                  <h3 className="product-heading">Categories:</h3>
                  <div className="d-flex flex-wrap align-items-center">
                    <p className="product-data">watch</p>,&nbsp;
                    <p className="product-data">airpod</p>,&nbsp;
                    <p className="product-data">camera</p>,&nbsp;
                    <p className="product-data">headphones</p>,&nbsp;
                    <p className="product-data">speaker</p>,&nbsp;
                    <p className="product-data">smart watch</p>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Tags:</h3>
                  <div className="badge">
                    <p className="product-data mb-0">Watch</p>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">SKU:</h3>
                  <p className="product-data">SKU999</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Availablity:</h3>
                  <p className="product-data">In stock</p>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3s">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge text-dark border border-1 border-secondary">
                      S
                    </span>
                    <span className="badge text-dark border border-1 border-secondary">
                      M
                    </span>
                    <span className="badge text-dark border border-1 border-secondary">
                      L
                    </span>
                    <span className="badge text-dark border border-1 border-secondary">
                      XL
                    </span>
                    <span className="badge text-dark border border-1 border-secondary">
                      XXL
                    </span>
                    <span className="badge text-dark border border-1 border-secondary">
                      XXXL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column my-3">
                  <h3 className="product-heading mb-1">Colors:</h3>
                  <Colors />
                </div>
                <div className="d-flex align-items-center gap-15 my-3">
                  <h3 className="product-heading mb-0">Quantity:</h3>
                  <div className="">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      style={{ width: "60px", height: "30px" }}
                      className="form-control"
                    />
                  </div>
                  <div className="mx-2 d-flex align-items-center gap-20">
                    <button className="button px-3 py-2">ADD TO CART</button>
                    <button className="button px-3 py-2">BUY NOW</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="" className="d-flex align-items-center">
                      <TbGitCompare className="me-1 ps-2" size={28} /> Add to
                      compare
                    </a>
                  </div>
                  <div>
                    <a href="" className="d-flex align-items-center">
                      <AiOutlineHeart className="me-1 ps-2" size={28} /> Add to
                      wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column my-3">
                  <div class="accordion accordion-flush" id="accordionExample">
                    <div class="accordion-item border-0">
                      <h3
                        class="accordion-header product-heading"
                        id="headingOne"
                      >
                        <button
                          class="accordion-button d-flex align-items-center gap-10"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <BsTruck size={18} /> Shipping and Return
                        </button>
                      </h3>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p className="mb-0 product-data">
                            Free shipping and return available on orders! <br />
                            we ship all US domestic orders widthin{" "}
                            <b>5-10 business days </b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed d-flex align-items-center gap-10"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <CiRuler size={18} />
                          Dimensions
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed d-flex align-items-center gap-10"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <AiOutlineHeart size={18} />
                          Care instructions
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading">Copy product link:</h3>
                  <a
                    className="badge"
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard("test");
                    }}
                  >
                    Copy product link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 radius-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor distinctio enim quasi, delectus omnis neque vel placeat
                  voluptas ipsa ea labore consectetur in modi eligendi maxime ex
                  qui vitae praesentium blanditiis totam autem assumenda.
                  Similique dignissimos nisi at atque. Aperiam sunt autem
                  suscipit dolorum facilis aliquam iusto dicta assumenda ipsam?
                </p>
              </div>
            </div>
          </div>
        </Container>

        <Container id="review" class1="reviews-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="bg-white p-3 review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h5 className="mb-2">Customer Reviews</h5>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <div className="mb-3">
                    <ReactStars
                      count={5}
                      size={20}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="form-floating">
                      <textarea
                        name=""
                        id="comments"
                        cols="30"
                        rows="5"
                        className="form-control"
                        placeholder="Conmments"
                      ></textarea>
                      <label htmlFor="comments">Conmments</label>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="button">
                        Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={20}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium hic dignissimos magni. Ut laboriosam officia
                      cumque, dolore tempore eveniet nobis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default SingleProduct;
