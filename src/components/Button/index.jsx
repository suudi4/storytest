import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-sm" };
const variants = {
  fill: {
    red_400_19: "bg-red-400_19 text-red-400",
    yellow_300_19: "bg-yellow-300_19 text-yellow-300",
    blue_A200_33: "bg-blue-A200_33 text-blue-A200",
    deep_purple_500_19: "bg-deep_purple-500_19 text-deep_purple-500",
    blue_gray_50: "bg-blue_gray-50 text-deep_purple-500",
    teal_500_19: "bg-teal-500_19 text-teal-500",
    gray_900: "bg-gray-900",
  },
  outline: {
    teal_500: "outline outline-[1px] outline-teal-500 text-white-A700",
    gray_500: "outline outline-[1px] outline-gray-500 text-gray-400",
  },
};
const sizes = { xs: "p-[5px]", sm: "px-3 py-[13px]", md: "p-[23px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "red_400_19",
    "yellow_300_19",
    "blue_A200_33",
    "deep_purple_500_19",
    "blue_gray_50",
    "teal_500_19",
    "gray_900",
    "teal_500",
    "gray_500",
  ]),
};

export { Button };
