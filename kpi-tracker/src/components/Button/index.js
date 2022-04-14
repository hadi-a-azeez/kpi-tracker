import React from "react";

const Button = ({
  label = "",
  type = "button",
  name = "",
  value = "",
  onClick = () => {},
  ...rest
}) => {
  return (
    <button
      className="bg-blue-500  text-white font-bold py-2 w-full rounded"
      type={type}
      name={name}
      value={value}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
