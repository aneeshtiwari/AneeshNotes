import React from "react";

const Note = ({ note, date, time }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "20px",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <div contenteditable="true" style={{ width: "100%", overflowY: "auto" }}>
        {note}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ marginRight: "20px" }}>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default Note;
