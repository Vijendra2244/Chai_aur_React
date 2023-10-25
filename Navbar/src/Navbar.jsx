import React from "react";
import "./index.css";
import { BsSearch } from "react-icons/bs";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="navContainer">
          <h1 className="navLogo">{props.logo}</h1>
          <ul>
            <li>{props.Home}</li>
            <li>{props.Service}</li>
            <li>{props.Product}</li>
            <li>{props.ContactUs}</li>
          </ul>
            <p className="SearchIcon"><BsSearch/></p>

            <div className="inputSearch">
            <p className="SearchBar"><BsSearch/></p> 
            <input className="inputBar" type="text" placeholder="Search here..." />
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
