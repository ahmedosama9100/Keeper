import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <HighlightIcon />
      <h1>Keeper</h1>
    </header>
  );
}
