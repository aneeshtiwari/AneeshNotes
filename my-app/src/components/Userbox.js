import React, { useEffect } from "react";

const Userbox = ({ value, color, setActiveUsers, index, activeUser }) => {
  const temp = value.split(" ");
  console.log("value", value);
  let text;
  if (temp.length == 2)
    text = temp[0][0].toUpperCase() + temp[1][0]?.toUpperCase();
  else text = temp[0][0].toUpperCase();

  const ChangeUser = () => {
    setActiveUsers(index);
  };
  useEffect(() => {}, [activeUser]);
  return (
    <div
      className="userbox"
      style={{
        backgroundColor: activeUser == index ? "#c0f0cd" : "",
        marginLeft: "10px",
        borderRadius: "60px",
      }}
      onClick={() => ChangeUser()}
    >
      <div
        class="circular"
        style={{ backgroundColor: color, marginRight: "20px" }}
      >
        {text}
      </div>
      <div class="name">{value}</div>
    </div>
  );
};

export default Userbox;
