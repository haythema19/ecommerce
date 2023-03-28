import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ForgotPassword = () => {
  return (
    <div>
      <Meta title="tài khoản" />
      <BreadCrumb title="tài khoản" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đặt lại mật khẩu của bạn</h3>
              <p className="text-center">
                Chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn
              </p>
              <form className="d-flex flex-column gap-20" action="">
                <div className="form-floating mb-3">
                  <CustomInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div>
                  <div className="mt-3 d-flex flex-column gap-15 align-items-center">
                    <button className="button" type="submit">
                      Xác nhận
                    </button>
                    <Link to="/login" className="">
                      Quay lại
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
