import React, { useState } from "react";

const Modal = () => {
  const [colors, setColors] = useState([
    "#3498db",
    "#03fc1c",
    "#c15dcf",
    "#3498db",
    "#3498db",
    "#3498db",
  ]);
  const [selected, setSelected] = useState({ name: null, color: null });
  return (
    <div>
      <div>My text</div>
      <div style={{ display: "flex" }}>
        <div>write here</div>
        <input
          onChange={(e) => setSelected({ ...selected, name: e.target.value })}
        ></input>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Chose color</span>
        <div style={{ display: "flex" }}>
          {colors.map((v, i) => (
            <div
              class="circular"
              style={{ backgroundColor: v }}
              onClick={(e, v) => {
                console.log(e.target, v);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
