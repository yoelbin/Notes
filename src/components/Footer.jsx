import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Joe Benjamin ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
