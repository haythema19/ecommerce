import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div
      className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link
        to="/product/:id"
        className="product-card d-flex flex-column position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <Link to="">
            <img src="/images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="/images/tab1.jpg" alt="" />
          <img className="img-fluid" src="/images/tab.jpg" alt="" />
        </div>
        <div className="product-details">
          <h6 className="sub-title brand">Apple</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored studient
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={5}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            asperiores veritatis temporibus ducimus blanditiis rem doloribus
            ullam nesciunt officiis! Modi!
          </p>
          <p className="price">$99.99</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="">
              <img src="/images/prodcompare.svg" alt="" />
            </Link>
            <Link to="">
              <img src="/images/view.svg" alt="" />
            </Link>
            <Link to="">
              <img src="/images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
