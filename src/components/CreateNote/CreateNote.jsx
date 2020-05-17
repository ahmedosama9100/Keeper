import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./createNote.css";

export default function CreateNote(props) {
  const [fullNote, setFullNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpand] = useState(false);

  document.addEventListener("click", event => {
    const clickedElement = event.path[1].className;
    setExpand(clickedElement === "create-note" ? true : false);
  });

  function handleNote(event) {
    const { name, value } = event.target;
    setFullNote(previous => {
      return {
        ...previous,
        [name]: value
      };
    });
  }

  function postNote() {
    props.postNote(fullNote);
    setFullNote({ title: "", content: "" });
  }

  return (
    <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          className="note-title"
          onChange={handleNote}
          placeholder="Title"
          autoComplete="off"
          value={fullNote.title}
        />
      )}

      <textarea
        name="content"
        className="note-content"
        onChange={handleNote}
        placeholder="Take a note..."
        row={isExpanded ? 1 : 3}
        value={fullNote.content}
      ></textarea>
      <Zoom in={isExpanded}>
        <Fab className="add-note" onClick={postNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
