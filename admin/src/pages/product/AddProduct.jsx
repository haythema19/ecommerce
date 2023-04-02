import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Input, Select, Space, Tag } from "antd";

import ReactQuill from "react-quill";
import { Multiselect } from "react-widgets";
import "react-quill/dist/quill.snow.css";
import "react-widgets/styles.css";

import { CustomInput, ImageUpload } from "../../components";
import { getBrands } from "../../features/brand/brandSlice";
import { getCategories } from "../../features/category/pcategorySlice";
import { getColors } from "../../features/color/colorSlice";

let schema = yup.object().shape({
  title: yup.string().required("Thiếu tên sản phẩm"),
  description: yup.string().required("Thiếu mô tả sản phẩm"),
  price: yup.number().required("Nhập giá sản phẩm"),
  quantity: yup.number().required("Nhập số lượng sản phẩm"),
  brand: yup.string().required("Chọn thương hiệu"),
  category: yup.string().required("Chọn loại sản phẩm"),
  color: yup.array().required("Chọn màu sản phẩm"),
});

const AddProduct = (placeholder) => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const { Option } = Select;

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, [brand, category, color]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      quantity: "",
      brand: "",
      category: "",
      color: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);

  const colors = [];
  colorState.forEach((i) => {
    colors.push({
      _id: i._id,
      color: i.title,
    });
  });
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-4 title">Add product</h3>
          <button
            type="submit"
            className="px-5 py-2 btn btn-success border-0 rounded-3 mb-3"
          >
            Đăng
          </button>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <div className="w-75 d-flex flex-column gap-3">
            <div className="card">
              <div>
                <CustomInput
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                />
                <div className="error">
                  {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                  ) : null}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="">Description</label>
                <ReactQuill
                  theme="snow"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange("description")}
                />
                <div className="error">
                  {formik.touched.description && formik.errors.description ? (
                    <div>{formik.errors.description}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="card">
              <h6 className="mb-4">Pricing</h6>
              <div className="d-flex gap-4 justify-content-between">
                <div className="w-100">
                  <label htmlFor="">Old price</label>
                  <div>
                    <Input
                      type="number"
                      prefix="$"
                      style={{ width: "100%", borderRadius: "0" }}
                      size="large"
                      name="price"
                      value={formik.values.pricr}
                      onChange={formik.handleChange("price")}
                      onBlur={formik.handleBlur("price")}
                    />
                    <div className="error">
                      {formik.touched.price && formik.errors.price ? (
                        <div>{formik.errors.price}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <label htmlFor="">Old price</label>
                  <div>
                    <Input
                      prefix="$"
                      style={{ width: "100%", borderRadius: "0" }}
                      size="large"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <h6 className="mb-4">Inventory</h6>
              <div className="w-100">
                <label htmlFor="">SKU</label>
                <div>
                  <Input
                    style={{ width: "100%", borderRadius: "0" }}
                    size="large"
                  />
                </div>
              </div>
              <div className="w-100 mt-3">
                <label htmlFor="">Stock quantity</label>
                <div>
                  <Input
                    style={{ width: "100%", borderRadius: "0" }}
                    size="large"
                    max={9999}
                    type="number"
                    name="quantity"
                    value={formik.values.quantity}
                    onChange={formik.handleChange("quantity")}
                    onBlur={formik.handleBlur("quantity")}
                  />
                  <div className="error">
                    {formik.touched.quantity && formik.errors.quantity ? (
                      <div>{formik.errors.quantity}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column w-25">
            <div className="d-flex flex-column gap-3">
              <div className="card d-flex flex-column">
                <h6 className="mb-2">Brand</h6>
                <div>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="select brand"
                    optionLabelProp="label"
                    menuItemSelectedIcon="chọn"
                    name="brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange("brand")}
                    onBlur={formik.handleBlur("brand")}
                  >
                    {brandState.map((i, j) => {
                      return (
                        <Option value={i.title}>
                          <Space>{i.title}</Space>
                        </Option>
                      );
                    })}
                  </Select>
                  <div className="error">
                    {formik.touched.brand && formik.errors.brand ? (
                      <div>{formik.errors.brand}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-column">
                <h6 className="mb-2">Categories</h6>
                <div>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="select category"
                    optionLabelProp="label"
                    menuItemSelectedIcon="chọn"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange("category")}
                    onBlur={formik.handleBlur("category")}
                  >
                    {categoryState.map((i, j) => {
                      return (
                        <Option value={i.title}>
                          <Space>{i.title}</Space>
                        </Option>
                      );
                    })}
                  </Select>
                  <div className="error">
                    {formik.touched.category && formik.errors.category ? (
                      <div>{formik.errors.category}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card d-flex flex-column">
                <h6 className="mb-2">Color</h6>
                <div>
                  <Multiselect
                    dataKey="id"
                    filter="contains"
                    textField="color"
                    data={colors}
                    name="color"
                    onChange={
                      ((e) => setColor(e),
                      formik.setFieldTouched,
                      formik.setFieldValue)
                    }
                  />
                  <div className="error">
                    {formik.touched.color && formik.errors.color ? (
                      <div>{formik.errors.color}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className=" accordion-item accordion-flush">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Upload image
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body mt-3">
                      <ImageUpload />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
