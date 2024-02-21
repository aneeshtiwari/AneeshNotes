import React from "react";
import { useState } from "react";
import Userbox from "./Userbox";
import Modal from "./Modal";
const Leftbar = () => {
  const [users, setUsers] = useState(["Abhi kr", "anosj towari", "jai hind"]);
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
        return <Userbox value={v} color={"#c15dcf"} key={i} />;
      })}

      <button onClick={() => openModal()}>Open Modal</button>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={() => closeModal()}>
            &times;
          </span>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
