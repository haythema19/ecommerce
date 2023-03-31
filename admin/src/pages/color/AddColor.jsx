import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { Stepper } from "react-form-stepper";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

import { CustomInput } from "../../components";

const AddColor = () => {
  return (
    <div className="card">
      <div>
        <form action="">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4 title">Add color</h3>
            <button
              type="submit"
              className="px-5 py-2 btn btn-success border-0 rounded-3 mb-3"
            >
              Đăng
            </button>
          </div>

          <CustomInput type="text" placeholder="Color" id="color" />
        </form>
      </div>
    </div>
  );
};

export default AddColor;
