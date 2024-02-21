import React from "react";

const sizeClasses = {
  txtInterMedium14Bluegray800: "font-inter font-medium",
  txtInterLight14: "font-inter font-light",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium36: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14Bluegray900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
