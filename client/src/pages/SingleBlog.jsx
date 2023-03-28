import React from "react";
import { Link } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";

import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Blog name" />
      <BreadCrumb title="Blog name" />

      <Container className="blog-wrapper home-wrapper-2 py-5">
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
          </div>
          <div className="col-9">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-1">
                <HiArrowLeft className="fs-6" /> Go back to blog
              </Link>
              <h3 className="title">A beautiful sunday morning renaissance</h3>
              <img
                className="img-fluid w-100 my-4"
                src="/images/blog-1.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, commodi! Aut, unde? Cum temporibus nemo quas libero
                reprehenderit, nostrum quasi minima ex itaque tenetur enim
                accusantium eveniet totam natus corporis. Tempore quidem quod
                soluta consequatur nesciunt commodi dignissimos. Aperiam sint
                fugiat, possimus dolore dolor perferendis ipsa ratione molestias
                illo sapiente? soluta consequatur nesciunt commodi dignissimos.
                Aperiam sint fugiat, possimus dolore dolor perferendis ipsa
                ratione molestias illo sapiente?
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
