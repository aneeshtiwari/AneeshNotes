import React from "react";

const Note = ({ note, date, time }) => {
  return (
    <div>
      <div>{note}</div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ marginRight: "20px" }}>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default Note;
