import React from "react";
import classNames from "classnames";
import { headerHeight } from "../constants/themeConsts";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import SearchBar from "../components/common/SearchBar";
import "../styles/header.css";

function Header(props) {
  const { navbarState, setNavbarState } = props;
  const openNavbar = () => {
    setNavbarState("OPEN");
  };
  return (
    <div
      className={classNames("App-Header")}
      style={{
        height: headerHeight,
      }}
    >
      <MenuUnfoldOutlined onClick={openNavbar}/>
      <header className="text-gray-600 body-font w-[100vw]">
        
      </header>

    </div>
  );
}

export default Header;
