import React from "react";

interface IProps {
  username: string;
}

const userInfo: React.FunctionComponent<IProps> = props => {
  return <div>Your Name: {props.username}</div>;
};
export default userInfo;
