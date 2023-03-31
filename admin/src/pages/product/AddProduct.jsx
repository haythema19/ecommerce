import React, { useState } from "react";
import JoditEditor from "jodit-react";

import { Input, InputNumber, Select, Upload } from "antd";
import ImgCrop from "antd-img-crop";

import { BsChevronDown } from "react-icons/bs";

import { CustomInput } from "../../components";

const AddProduct = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e) => {
    console.log(e);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <>
      <form action="">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-4 title">Add product</h3>
          <button className="px-5 py-2 btn btn-success border-0 rounded-3 mb-3">
            Đăng
          </button>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <div className="w-75 d-flex flex-column gap-3">
            <div className="card">
              <CustomInput type="text" placeholder="Name" id="name" />

              <div className="mt-4">
                <label htmlFor="">Description</label>
                <JoditEditor
                  value={desc}
                  tabIndex={4} // tabIndex of textarea
                  onChange={(evt) => {
                    handleDesc(evt);
                  }}
                />
              </div>
            </div>
            <div className="card">
              <h6 className="mb-4">Pricing</h6>
              <div className="d-flex gap-4 align-items-center justify-content-between">
                <div className="w-100">
                  <label htmlFor="">Old price</label>
                  <div>
                    <InputNumber
                      prefix="$"
                      style={{ width: "100%", borderRadius: "0" }}
                      size="large"
                    />
                  </div>
                </div>
                <div className="w-100">
                  <label htmlFor="">Old price</label>
                  <div>
                    <InputNumber
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
                  <InputNumber
                    style={{ width: "100%", borderRadius: "0" }}
                    size="large"
                    max={9999}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column w-25">
            <div className="d-flex flex-column gap-3">
              <div className="card d-flex flex-column">
                <h6 className="mb-2">Categories</h6>
                <div>
                  <Select
                    mode="tags"
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{
                      width: "100%",
                    }}
                    options={options}
                  />
                </div>
              </div>
              <div className="card d-flex flex-column">
                <h6 className="mb-2">Tags</h6>
                <div>
                  <Select
                    mode="tags"
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{
                      width: "100%",
                    }}
                    options={options}
                  />
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
                      <ImgCrop rotationSlider>
                        <Upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          listType="picture-card"
                          onChange={() => {}}
                          onPreview={onPreview}
                        >
                          + Upload
                        </Upload>
                      </ImgCrop>
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
