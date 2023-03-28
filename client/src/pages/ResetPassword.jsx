import React from "react";

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đặt lại mật khẩu</h3>
              <form className="d-flex flex-column gap-20" action="">
                <div className="form-floating mb-3">
                  <CustomInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu mới"
                  />
                  <label htmlFor="password">Mật khẩu mới</label>
                </div>
                <div className="form-floating mb-3">
                  <CustomInput
                    type="password"
                    name="confpassword"
                    id="confpassword"
                    placeholder="Xác nhận mật khẩu"
                  />
                  <label htmlFor="confpassword">Xác nhận mật khẩu</label>
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button">Xác nhận</button>
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

export default ResetPassword;
