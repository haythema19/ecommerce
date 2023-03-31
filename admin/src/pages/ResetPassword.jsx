import React from "react";
import { Link } from "react-router-dom";
import { CustomInput } from "../components";

const ResetPassword = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{
        background: "#ffd333",
        minHeight: "100vh",
      }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Đặt lại mật khẩu</h3>
        <p className="text-center">Nhập mật khẩu mới để hoàn tất</p>
        <form action="">
          <CustomInput type="password" id="password" placeholder="Mật khẩu" />
          <CustomInput
            type="confPassword"
            id="confPassword"
            placeholder=" Nhập lại mật khẩu"
          />

          <Link to="/reset-password" className="button px-3 py-2">
            Đặt lại mật khẩu
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
