import React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string,
  className: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
};

export const Button: React.FC<Props> = (props) => {
  return (
    <button className={`${props.className} ${styles.btn}`} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export type { Props as ButtonProps };
export default Button;
