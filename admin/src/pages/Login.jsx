import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "../Components";

const Login = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{
        background: "#ffd333",
        minHeight: "100vh",
      }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Đăng nhập</h3>
        <p className="text-center">Vui lòng đăng nhập để tiếp tục</p>
        <form action="">
          <CustomInput type="text" id="email" placeholder="Email" />
          <CustomInput type="password" id="password" placeholder="Mật khẩu" />

          <Link to="/admin" className="button px-3 py-2">
            Đăng nhập
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
