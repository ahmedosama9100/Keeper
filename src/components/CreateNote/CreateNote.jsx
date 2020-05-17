import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./createNote.css";

export default function CreateNote() {
  return (
    <form className="create-note">
      <input
        name="title"
        className="note-title"
        placeholder="Title"
        autoComplete="off"
      />
      <textarea
        name="content"
        className="note-content"
        placeholder="Take a note..."
      ></textarea>
      <button className="add-note">
        <AddIcon />
      </button>
    </form>
  );
}
