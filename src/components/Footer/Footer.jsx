import React from "react";
import "./footer.css";
export default function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="footer">
      <p>Copyright &copy; {getYear()}</p>
    </footer>
  );
}
