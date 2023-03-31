import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { Stepper } from "react-form-stepper";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

import { CustomInput } from "../../components";

const AddBlog = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e) => {
    console.log(e);
  };

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="card">
      <div>
        <Stepper
          steps={[
            { label: "Add blog details" },
            { label: "Upload images" },
            { label: "Finish" },
          ]}
          activeStep={0}
        />
      </div>

      <div>
        <form action="">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4 title">Add blog</h3>
            <button className="px-5 py-2 btn btn-success border-0 rounded-3 mb-3">
              Đăng
            </button>
          </div>

          <CustomInput type="text" placeholder="Title" id="title" />

          <div className="form-floating mb-3">
            <select name="" id="category" className="form-control">
              <option value="">Select category</option>
            </select>
            <label htmlFor="category">category</label>
          </div>
          <div className="my-3">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
          <div>
            <JoditEditor
              // ref={editor}
              value={desc}
              // config={config}
              tabIndex={1} // tabIndex of textarea
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
