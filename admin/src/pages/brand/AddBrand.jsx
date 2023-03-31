import React from "react";

import { CustomInput } from "../../components";

const AddBrand = () => {
  return (
    <div className="card">
      <div>
        <form action="">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4 title">Add Brand</h3>
            <button
              type="submit"
              className="px-5 py-2 btn btn-success border-0 rounded-3 mb-3"
            >
              Đăng
            </button>
          </div>

          <CustomInput type="text" placeholder="Brand" id="brand" />
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
