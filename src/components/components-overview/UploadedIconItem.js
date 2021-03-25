import React from "react";

const UploadedIconItem = ({ iconName }) => {
  return (
    <i className="material-icons" style={{ fontSize: 1.6 + "rem" }}>
      {iconName}
    </i>
  );
};

export default UploadedIconItem;
