import React, { useState } from "react";
import Header from "./../Header/Header";
import CreateNote from "./../CreateNote/CreateNote";
import Note from "./../Note/Note";
import Footer from "./../Footer/Footer";

export default function App() {
  const [notes, setNotes] = useState([]);
  function postNote(fullNote) {
    // receive data that send from CreateNote component
    console.log(fullNote);
    setNotes([...notes, fullNote]);
  }
  function deleteNote(id) {
    setNotes(previous => {
      return previous.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <React.Fragment>
      <Header />
      <CreateNote postNote={postNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            noteTitle={note.title}
            noteContent={note.content}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </React.Fragment>
  );
}
