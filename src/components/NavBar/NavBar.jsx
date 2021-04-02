import React, { useState } from "react";
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
  return (
    <div
      className={`${
        location.pathname != "/" ? "navbar-other" : "navbar-home"
      } navbar w-100`}
    >
      <h3 className="navbar-brand">Elijah Hampton</h3>

      <div className="options">
        <Button inverted>
          Contact Me
          <AiFillCalendar className="mx-1" />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
