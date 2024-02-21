import React, { useState } from "react";

const Modal = (props) => {
  const [colors, setColors] = useState([
    "#3498db",
    "#03fc1c",
    "#c15dcf",
    "#85a832",
    "#751724",
    "#88e3d4",
  ]);
  const [selected, setSelected] = useState({
    name: null,
    color: null,
    index: null,
  });
  const addUser = async () => {
    if (!selected.name || !selected.color) {
      alert("kindly select name and color");
      return;
    }
    const temp = [...props.users];
    temp.push({
      name: selected.name,
      color: selected.color,
    });
    props.setUsers(temp);
    setSelected({ name: "", color: "", index: null });
    // Adding to local storage
    localStorage.setItem("aneesh-notes", JSON.stringify(temp));
  };
  return (
    <div>
      <div>My text</div>
      <div style={{ display: "flex" }}>
        <div>write here</div>
        <input
          value={selected.name}
          onChange={(e) => setSelected({ ...selected, name: e.target.value })}
        ></input>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Chose color</span>
        <div style={{ display: "flex" }}>
          <div
            class="circular"
            style={{
              backgroundColor: colors[0],
              border:
                selected.index == 0 ? "2px solid black" : "0px solid black",
            }}
            onClick={() => {
              setSelected({ ...selected, color: colors[0], index: 0 });
            }}
          ></div>
          <div
            class="circular"
            style={{
              backgroundColor: colors[1],
              border:
                selected.index == 1 ? "2px solid black" : "0px solid black",
            }}
            onClick={() => {
              setSelected({ ...selected, color: colors[1], index: 1 });
            }}
          ></div>
          <div
            class="circular"
            style={{
              backgroundColor: colors[2],
              border:
                selected.index == 2 ? "2px solid black" : "0px solid black",
            }}
            onClick={() => {
              setSelected({ ...selected, color: colors[2], index: 2 });
            }}
          ></div>
          <div
            class="circular"
            style={{
              backgroundColor: colors[3],
              border:
                selected.index == 3 ? "2px solid black" : "0px solid black",
            }}
            onClick={() => {
              setSelected({ ...selected, color: colors[3], index: 3 });
            }}
          ></div>
          <div
            class="circular"
            style={{
              backgroundColor: colors[4],
              border:
                selected.index == 4 ? "2px solid black" : "0px solid black",
            }}
            onClick={() => {
              setSelected({ ...selected, color: colors[4], index: 4 });
            }}
          ></div>
          <div
            class="circular"
            style={{
              backgroundColor: colors[5],
              border:
                selected.index == 5 ? "2px solid black" : "0px solid black",
            }}
            onClick={() => {
              setSelected({ ...selected, color: colors[5], index: 5 });
            }}
          ></div>
        </div>
      </div>
      <button onClick={addUser}>add</button>
    </div>
  );
};

export default Modal;
