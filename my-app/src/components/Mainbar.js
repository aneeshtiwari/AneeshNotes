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
  return (
    <div>
      {notes.map((v, i) => {
        return <Note note={v.note} date={v.date} time={v.time} />;
      })}
    </div>
  );
};

export default Mainbar;
