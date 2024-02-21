import React from "react";
import { useState } from "react";
import Userbox from "./Userbox";
import Modal from "./Modal";
const Leftbar = () => {
  // const localUsers = await JSON.parse(localStorage.getItem("aneesh-notes"));

  const [users, setUsers] = useState([
    { name: "Abhi kr", color: "#c15dcf" },
    { name: "anish tr", color: "#c15dcf" },
    { name: "vikas kr", color: "#c15dcf" },
    { name: "2663", color: "#c15dcf" },
  ]);
  // const [users, setUsers] = useState(localUsers);
  const [show, setShow] = useState(false);
  const openModal = () => {
    document.getElementById("myModal").style.display = "block";
  };
  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };
  return (
    <div className="leftbar">
      {users.map((v, i) => {
        return <Userbox value={v.name} color={v.color} key={i} />;
      })}

      <button onClick={() => openModal()}>Open Modal</button>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={() => closeModal()}>
            &times;
          </span>
          <Modal setUsers={setUsers} users={users} />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
