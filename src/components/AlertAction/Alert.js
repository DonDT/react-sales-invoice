import React from "react";
import Flip from "react-reveal/Flip";
import "./Alert.scss";

const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`}>
      <Flip>{text}</Flip>
    </div>
  );
};

export default Alert;
