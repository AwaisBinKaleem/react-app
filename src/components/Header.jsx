import React from "react";
import "../styles/header.css";
import classNames from "classnames";
import { headerHeight } from '../constants/themeConsts';
import {MenuUnfoldOutlined} from '@ant-design/icons';

function Header(props) {
  const {navbarState,setNavbarState} = props;
  const openNavbar = () => {
    setNavbarState('OPEN')
  }
  return (
    <div className={classNames(
        "App-Header",
    )}
    style={{
      height:headerHeight,
    }}
    >
      <MenuUnfoldOutlined onClick={openNavbar}/>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
