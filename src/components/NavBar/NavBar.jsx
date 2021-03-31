import React from "react";
import "./styles.css";

import { useLocation } from "react-router-dom";
import { AiFillTwitterCircle, AiFillGithub, AiFillGoogleCircle, AiFillCalendar } from "react-icons/ai";

const NavBar = (props) => {
  const location = useLocation();

  return (
  <div className={`${location.pathname != '/' ? 'navbar-other' : 'navbar-home'} navbar w-100`}>
    <h3 style={{margin: 0, padding: 10, fontSize: 20, color: 'rgb(34, 35, 35)'}}>
      Elijah Hampton
    </h3>

  <div className='options'>

    <AiFillTwitterCircle className='mx-2' size={25} />
    <AiFillGithub className='mx-2' size={25} />
    <AiFillCalendar className='mx-2' size={25}  />
  </div>
  </div>
  )
}

export default NavBar;
