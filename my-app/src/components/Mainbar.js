import React, { useState } from "react";
import Note from "./Note";

const Mainbar = () => {
  const [notes, setNotes] = useState([
    {
      note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
      date: "abjdjd",
      time: "626 AM",
    },
    {
      note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
      date: "abjdjd",
      time: "626 AM",
    },
    {
      note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
      date: "abjdjd",
      time: "626 AM",
    },
    {
      note: "ldjsajfafasfafd njfjdjf fmkdfhfjsfjs msdhfjsdfjdf  mfnhdsjff",
      date: "abjdjd",
      time: "626 AM",
    },
  ]);
  const addMsg = () => {
    const date = new Date();
    setNotes([
      ...notes,
      {
        note: document.getElementById("scrollableTextArea").innerText,
        date:
          date.getDate() +
          " " +
          months[date.getMonth()] +
          " " +
          date.getFullYear(),
        time: date.getHours() + " " + date.getMinutes(),
      },
    ]);
    document.getElementById("scrollableTextArea").innerText = "";
  };
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
  return (
    <div style={{ width: "60%" }}>
      {notes.map((v, i) => {
        return <Note note={v.note} date={v.date} time={v.time} />;
      })}
      <div class="textarea">
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
