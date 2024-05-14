import { ButtonProps } from "./types";

const variantStyle = {
  primary: `
  text-white
  bg-[#2f629b]
  `,
  secondary: `
  bg-white
  text-[#2f629b]
  `,
  whatsapp: `
  bg-[#25d366]
  text-white

  hover:bg-[#109642]
  hover:scale-105

  hover:active:scale-95
  `,
};

const fontSizeStyle = {
  lg: "text-[24px]",
  md: "text-[18px]",
  sm: "text-[14px]",
};

const styles = {
  base: `
  h-fit
  py-2 
  px-6
  font-bold
  rounded-sm
  w-fit
  flex
  gap-2
  items-center
    `,
};

export const buttonStyles = ({ variant, fontSize, className }: ButtonProps) => {
  const styleValues = [
    fontSizeStyle[fontSize!],
    variantStyle[variant!],
    Object.values(styles),
    className,
  ];

  return Object.values(styleValues).join("");
};
