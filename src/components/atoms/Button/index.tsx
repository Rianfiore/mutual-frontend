import { buttonStyles } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  variant = "primary",
  fontSize = "md",
  ...props
}: ButtonProps) {
  const { className, ...rest } = props;
  return (
    <button
      className={buttonStyles({ variant, fontSize, className })}
      {...rest}
    >
      {props.children}
    </button>
  );
}
