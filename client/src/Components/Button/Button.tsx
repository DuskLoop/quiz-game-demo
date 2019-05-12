import React from "react";
import "./Button.scss";
import { MouseEventHandler } from "react";

interface IProps {
  onClick: MouseEventHandler<any>;
  children: React.ReactNode;
}

export const Button: React.FunctionComponent<IProps> = props => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
