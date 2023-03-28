import React from "react";

const CustomInput = (props) => {
  const { type, name, id, className, placeholder } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        className={`form-control custom-input ${className}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
