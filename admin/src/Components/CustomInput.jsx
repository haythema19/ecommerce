import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, id, className, name, value, onChange, onBlur } =
    props;
  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-control mt-1 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
