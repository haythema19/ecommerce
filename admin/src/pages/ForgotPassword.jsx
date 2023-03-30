import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "../Components";

const ForgotPassword = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{
        background: "#ffd333",
        minHeight: "100vh",
      }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Quên mật khẩu</h3>
        <p className="text-center">Vui nhập email đăng kí tài khoản</p>
        <form action="">
          <CustomInput type="text" id="email" placeholder="Email" />

          <Link to="/forgot-password" className="button px-3 py-2">
            Gửi
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
