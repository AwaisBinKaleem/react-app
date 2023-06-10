import React from "react";
import "../styles/header.css";
import classNames from "classnames";
import { headerHeight } from '../constants/themeConsts';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={classNames(
        "App-Header",
        `h-[${headerHeight}]`
    )}>
      <h1>Header</h1>
      <Link to="/contacts">Contacts</Link>
      <Link to="/contacts/1">Contacts/1</Link>
    </div>
  );
}

export default Header;
