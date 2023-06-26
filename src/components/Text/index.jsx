import React from "react";

const sizeClasses = {
  txtMontserratBold16: "font-bold font-montserrat",
  txtMontserratBold24: "font-bold font-montserrat",
  txtMontserratBold36: "font-bold font-montserrat",
  txtMontserratBold14: "font-bold font-montserrat",
  txtLatoBold14: "font-bold font-lato",
  txtLatoRegular12Gray500: "font-lato font-normal",
  txtLatoRegular16Gray600: "font-lato font-normal",
  txtLatoRegular14Gray600: "font-lato font-normal",
  txtMontserratRegular14Gray600: "font-montserrat font-normal",
  txtLatoRegular16: "font-lato font-normal",
  txtOpenSansBold24: "font-bold font-opensans",
  txtLatoRegular14Black900: "font-lato font-normal",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtMontserratBold18: "font-bold font-montserrat",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular16Blue700: "font-lato font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtMontserratBold18Black900: "font-bold font-montserrat",
  txtMontserratBold72: "font-bold font-montserrat",
  txtMontserratBold36WhiteA700: "font-bold font-montserrat",
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
