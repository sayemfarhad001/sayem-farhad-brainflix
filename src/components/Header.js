import React from "react";
import logo from "../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../assets/icons/search.svg";
import plusIcon from "../assets/icons/upload.svg";

export default function Header() {
    return (
      <div className="header">
        <header className="header__main-container">
          <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="" />
          </div>
          <div className="header__searchbar">
            <div className="header__search-container">
              <img
                className="header__search-container--icon"
                src={searchIcon}
                alt=""
              />
              <h4 className="header__search-container--search">Search</h4>
            </div>
            <div className="header__upload-container--mohan header__mobile__muru"></div>
          </div>
          <div className="header__upload-container">
            <div className="header__upload-container-inner">
              <img
                className="header__upload-container-inner--icon"
                src={plusIcon}
                alt=""
              />
              <h4 className="header__upload-container-inner--upload">UPLOAD</h4>
            </div>
            <div className="header__upload-container--mohan header__tablet__muru"></div>
          </div>
        </header>
      </div>
    );
  }
  