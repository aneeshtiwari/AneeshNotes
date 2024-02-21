import React from "react";

const Userbox = ({ value, color }) => {
  const temp = value.split("");

  return (
    <div className="userbox">
      <div class="circular" style={{ backgroundColor: color }}>
        {temp[0][0].toUpperCase() + temp[1][0].toUpperCase()}
      </div>
      <div class="name">{value}</div>
    </div>
  );
};

export default Userbox;
