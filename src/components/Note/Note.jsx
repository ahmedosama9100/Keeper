import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./note.css";

export default function Note(props) {
  function deleteNote() {
    props.deleteNote(props.id);
  }
  return (
    <div class="note-container">
      <h4 className="note-title">{props.noteTitle}</h4>
      <p className="note-content">{props.noteContent}</p>
      <button className="delete-note" onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}
