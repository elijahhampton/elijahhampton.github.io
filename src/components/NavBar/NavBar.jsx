import React, { useEffect, useState } from "react";
import "./styles.css";

import { useLocation } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillCalendar,
} from "react-icons/ai";
import Button from "../Button/Button";
import ContactMe from "../Home/Modal/ContactMe";

const NavBar = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.onscroll = function() {myFunction()}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > document.getElementById("navbar").offsetTop) {
    document.getElementById("navbar").classList.add("sticky")
  } else {
    document.getElementById("navbar").classList.remove("sticky");
  }
}
}, [])
  return (
    <div
    id='navbar'
      className={`${
        location.pathname != "/" ? "navbar-other" : "navbar-home"
      } navbar w-100`}
    >

      <div className='w-100  d-flex flex-row justify-content-start align-items-center'>
      <Button text>
            Elijah Hampton
        </Button>

        <Button text>
            About
        </Button>

        <Button text>
           Services
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
