import React from "react"
import "./Navigation.css";

function Navigation() {
    let navArr = ['Hello World', 'List Of Names', 'User Profile', 'Star Display', 'Quote Display']; 
  return (
    <div>
      <ul id="nav">
        {navArr.map((nav, i) => <li key={nav + i}><a href={"#" + nav.replace(" ", "")}> {nav}</a></li> )}
      </ul>
    </div>
  )
};

export default Navigation;
