import React, { useEffect } from "react";
import { useState } from "react";
import Userbox from "./Userbox";
import Modal from "./Modal";
const Leftbar = (props) => {
  const getLocalUsers = async () => {
    const localUsers = await JSON.parse(localStorage.getItem("aneesh-notes"));
    if (localUsers) setUsers(localUsers);
  };
  // const [users, setUsers] = useState([
  //   {
  //     name: "Abhi kr",
  //     color: "#c15dcf",
  //     notes: [
  //       {
  //         note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
  //         date: "abjdjd",
  //         time: "626 AM",
  //       },
  //       {
  //         note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
  //         date: "abjdjd",
  //         time: "626 AM",
  //       },
  //       {
  //         note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
  //         date: "abjdjd",
  //         time: "626 AM",
  //       },
  //       {
  //         note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
  //         date: "abjdjd",
  //         time: "626 AM",
  //       },
  //     ],
  //   },
  //   { name: "anish tr", color: "#c15dcf" },
  //   { name: "vikas kr", color: "#c15dcf" },
  //   { name: "2663", color: "#c15dcf" },
  // ]);
  const [users, setUsers] = useState([]);
  console.log("active", props.activeUser);
  const openModal = () => {
    document.getElementById("myModal").style.display = "block";
  };
  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  useEffect(() => {
    getLocalUsers();
  }, []);
  return (
    <div className="leftbar" style={{ padding: "10px", height: "100%" }}>
      {users.map((v, i) => {
        return (
          <Userbox
            value={v.name}
            color={v.color}
            key={i}
            index={i}
            setActiveUsers={props.setActiveUsers}
            activeUser={props.activeUser}
          />
        );
      })}

      {/* <button onClick={() => openModal()}>Open Modal</button> */}
      <div
        onClick={() => openModal()}
        class="circular"
        style={{
          backgroundColor: "#0505f2",
          marginLeft: "220px",
          marginTop: "10px",
        }}
      >
        +
      </div>
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
