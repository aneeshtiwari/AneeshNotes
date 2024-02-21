import React, { useState, useEffect } from "react";
import Note from "./Note";
import Userbox from "./Userbox";
const Mainbar = ({ activeUser }) => {
  const getLocalUsers = async () => {
    const localUsers = await JSON.parse(localStorage.getItem("aneesh-notes"));
    if (!localUsers) return localUsers;
    let t;
    if (localUsers[activeUser]) t = localUsers[activeUser].notes;

    if (!t) setNotes([]);
    else {
      setNotes(localUsers[activeUser].notes);
    }
    if (localUsers[activeUser]) setUsername(localUsers[activeUser].name);
    if (localUsers) return localUsers;
    return [];
  };
  const [notes, setNotes] = useState([]);
  const addMsg = () => {
    const date = new Date();
    const newNote = {};
    newNote.note = document.getElementById("scrollableTextArea").innerText;
    newNote.time = date.getHours() + " " + date.getMinutes();
    newNote.date =
      date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

    getLocalUsers()
      .then((msg) => {
        setNotes([...notes, newNote]);
        const users = msg;
        users[activeUser].notes = [...notes, newNote];
        localStorage.setItem("aneesh-notes", JSON.stringify(users));
      })
      .catch(() => console.log("got error"));
    document.getElementById("scrollableTextArea").innerText = "";
  };
  const [username, setUsername] = useState("a");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    getLocalUsers();
  }, [activeUser]);
  console.log("activess=", activeUser);
  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "#c6eef7",
      }}
    >
      <div style={{ border: "5px solid black" }}>
        <Userbox color="#2a2ac7" value={username} />
      </div>
      {notes.map((v, i) => {
        return <Note note={v.note} date={v.date} time={v.time} />;
      })}
      <div class="textarea" style={{ backgroundColor: "white" }}>
        <div
          class="scrollable-text-area"
          id="scrollableTextArea"
          contenteditable="true"
        ></div>
        <div class="send-icon" onClick={addMsg}>
          Send
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
