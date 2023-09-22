import { useState } from "react";
import classNames from "classnames";
import "../styles/leftSideBar.css";
import {MenuFoldOutlined} from '@ant-design/icons';
import { headerHeight } from "../constants/themeConsts";
import { Link } from "react-router-dom";

const LeftSideBar = (props) => {
  const {refrance, state,setState} = props;

  const closeSidebar = () => {
    setState("CLOSE")
  }

  return (
    <div className={classNames(
      "LeftSideBar",
      state === "CLOSE" ? "leftSidebarClosed" : ""
    )}
    ref={refrance}
    >
      <div className={classNames(
        "leftSidebarHeader",
      )}
      style={{
        height:headerHeight
      }}
      >
      <MenuFoldOutlined className="closeNavbarIcon" onClick={closeSidebar}/>
      </div>
      <p>Left SideBar</p>
      <Link to="/contacts">Contacts</Link><br/>
      <Link to="/contacts/1">Contacts/1</Link>
    </div>
  )
}

export default LeftSideBar
