import React from 'react';
import logo from '../../img/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header id='header'>
        <div className="logo-area">
            <a href='#'><img src={logo} alt='Logo'/></a>
        </div>
        <div className="menu-area">
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Workshop</a></li>
                <li><a href='#'>Contact</a></li>
                <input type="text" placeholder="Search"/>
        <a href='#'><i className="fa-solid fa-ellipsis-vertical"></i></a>
            </ul>
        </div>
    </header>
  )
}
