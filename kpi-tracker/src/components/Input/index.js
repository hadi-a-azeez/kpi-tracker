import React from "react";

const InputField = ({
  label = "",
  type = "text",
  name = "",
  value = "",
  onChange = () => {},
  placeholder = "",
  error = "",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-800 font-bold text-sm">{label}</label>
      <input
        className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
};

export default InputField;
