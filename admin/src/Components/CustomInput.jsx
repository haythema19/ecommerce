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
        className={`form-control mt-1 ${className}`}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
