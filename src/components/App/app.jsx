import React from "react";
import Header from "./../Header/Header";
import CreateNote from "./../CreateNote/CreateNote";
import Note from "./../Note/Note";
import Footer from "./../Footer/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <CreateNote />
      <Note />
      <Footer />
    </React.Fragment>
  );
}
