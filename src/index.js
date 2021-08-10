import React from "react";
import ReactDOM from "react-dom";

const myName = "Binepal Singh";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
