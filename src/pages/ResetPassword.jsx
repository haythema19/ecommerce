import React from "react";

import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form className="d-flex flex-column gap-20" action="">
                <div className="form-floating mb-3">
                  <CustomInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <label  htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <CustomInput
                    type="password"
                    name="confpassword"
                    id="confpassword"
                    placeholder="Confirm Password"
                  />
                  <label  htmlFor="confpassword">
                    Confirm Password
                  </label>
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button">Ok</button>
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
