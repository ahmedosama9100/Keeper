import React from "react";
import Header from "./../Header/Header";
import CreateNote from "./../CreateNote/CreateNote";
import Note from "./../Note/Note";
import Footer from "./../Footer/Footer";

export default function App() {
  function postNote(fullNote) { // receive data that send from CreateNote component
    console.log(fullNote);
  }
  return (
    <React.Fragment>
      <Header />
      <CreateNote postNote={postNote} />
      <Note />
      <Footer />
    </React.Fragment>
  );
}
