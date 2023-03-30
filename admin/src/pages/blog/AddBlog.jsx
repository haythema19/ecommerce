import React, { useState } from "react";
import JoditEditor from "jodit-react";

import { CustomInput } from "../../Components";

const AddBlog = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e) => {
    console.log(e);
  };

  return (
    <div className="card">
      <div>
        <form action="">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4">Add blog</h3>
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
          <JoditEditor
            // ref={editor}
            value={desc}
            // config={config}
            tabIndex={1} // tabIndex of textarea
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
