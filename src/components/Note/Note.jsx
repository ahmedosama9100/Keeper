import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./note.css";

export default function Note() {
  return (
    <div class="note-container">
      <h4 className="note-title">Title</h4>
      <p className="note-content">
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla sl;akjfda;dkjfa;sldkjfas;ldkjfas;ldkjfasl;dkjfas;dlkjfas;dlkj
      </p>
      <button className="delete-note">
        <DeleteIcon />
      </button>
    </div>
  );
}
