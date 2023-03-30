import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, id, i_class } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        id={id}
        className={`form-control ${i_class}`}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;
