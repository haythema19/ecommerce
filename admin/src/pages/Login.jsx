import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import { CustomInput } from "../components";
import { login } from "../features/auth/authSlice";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập Email"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state) => state);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (user || isSuccess) {
      navigate("admin");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{
        background: "#ffd333",
        minHeight: "100vh",
      }}
    >
      <div
        className="my-5 bg-white rounded-3 mx-auto p-3"
        style={{ width: "450px" }}
      >
        <h3 className="text-center">Đăng nhập</h3>
        <div className="error mb-3 mt-1 text-center">
          {message.message == "rejected" ? "Bạn không có quyền Admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <CustomInput
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />

            <div className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="mt-3">
            <CustomInput
              id="password"
              name="password"
              type="password"
              placeholder="Mật khẩu"
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <Link
            to="/forgot-password"
            className="d-flex justify-content-end mt-2 text-dark"
          >
            Quên mật khẩu
          </Link>
          <button
            type="submit"
            className="button w-100 border-0 mt-3 px-3 py-2"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
