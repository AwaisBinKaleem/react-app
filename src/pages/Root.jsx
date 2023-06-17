//LAYOUT-COMPONENT-Or-LANDING-PAGE
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import classNames from "classnames";
import { headerHeight } from "../constants/themeConsts";
import { useState } from "react";
import LandingPage from "./LandingPage";

function Root() {
  const location = useLocation()
  // const [displayHeadr,setDisplayHeadr] = useState(location.pathname === '/' ? false : true)
  // const [displayNavbar,setDisplayNavbar] = useState(location.pathname === '/' ? false : true)
  const [displayHeadr,setDisplayHeadr] = useState(true)
  const [displayNavbar,setDisplayNavbar] = useState(true)
  const [navbarState,setNavbarState] = useState("CLOSE")
  return (
    <>
      <main className="page-content">
      {
        displayHeadr && <Header navbarState={navbarState} setNavbarState={setNavbarState}/>
      }
      <div className={classNames(
        'Main-Page',
        'w-full'
      )}
      style={{
        position:'absolute',
        top:displayHeadr?headerHeight:0,
      }}
      >
        {
          // location.pathname === '/' && <LandingPage/>
          <LandingPage/>
        }
        
        <Outlet />
      </div>
        {/* footer */}
        {
          // displayNavbar && <LeftSideBar state={navbarState} setState={setNavbarState}/>
          <LeftSideBar state={navbarState} setState={setNavbarState}/>
        }
      </main>
    </>
  );
}

export default Root;
