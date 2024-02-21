import React from "react";

const Userbox = ({ value, color }) => {
  const temp = value.split(" ");
  let text;
  if (temp.length == 2)
    text = temp[0][0].toUpperCase() + temp[1][0]?.toUpperCase();
  else text = temp[0][0].toUpperCase();
  return (
    <div className="userbox">
      <div class="circular" style={{ backgroundColor: color }}>
        {text}
      </div>
      <div class="name">{value}</div>
    </div>
  );
};

export default Userbox;
