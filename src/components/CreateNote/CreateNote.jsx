import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./createNote.css";

export default function CreateNote() {
  const [isExpanded, setExpand] = useState(false);

  document.addEventListener("click", event => {
    const clickedElement = event.path[1].className;
    setExpand(clickedElement === "create-note" ? true : false);
  });

  return (
    <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          className="note-title"
          placeholder="Title"
          autoComplete="off"
        />
      )}

      <textarea
        name="content"
        className="note-content"
        placeholder="Take a note..."
        row={isExpanded ? 1 : 3}
      ></textarea>
      <Zoom in={isExpanded}>
        <Fab className="add-note">
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
