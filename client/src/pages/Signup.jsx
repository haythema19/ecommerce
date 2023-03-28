import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title="đăng kí tài khoản" />
      <BreadCrumb title="đăng kí tài khoản" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đăng kí</h3>
              <form className="d-flex flex-column gap-20" action="">
                <div className="form-floating mb-3">
                  <CustomInput
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Họ và tên"
                  />
                  <label  htmlFor="name">
                    Họ và tên
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <CustomInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <label  htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <CustomInput
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="Số điện thoại"
                  />
                  <label  htmlFor="mobile">
                    Số điện thoại
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <CustomInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                  />
                  <label htmlFor="password">Mật khẩu</label>
                </div>
                <div>
                  <div className="mt-2 d-flex align-items-center justify-content-between">
                    <Link to="/login">Quay lại đăng nhập</Link>
                  </div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button">Đăng kí</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
