//ROOT-LAYOUT-COMPONENT-Or-LANDING-PAGE
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import classNames from "classnames";
import { headerHeight } from "../constants/themeConsts";
import { useState } from "react";
import LandingPage from "./LandingPage";
import { useClickAway } from "@uidotdev/usehooks";

function App() {
  const location = useLocation();
  // const [displayHeadr,setDisplayHeadr] = useState(location.pathname === '/' ? false : true)
  // const [displayNavbar,setDisplayNavbar] = useState(location.pathname === '/' ? false : true)
  const [displayHeadr, setDisplayHeadr] = useState(true);
  const [displayNavbar, setDisplayNavbar] = useState(true);
  const [navbarState, setNavbarState] = useState("CLOSE");

  const ref = useClickAway(() => {
    setNavbarState("CLOSE");
  });

  return (
    <>
      <main className="page-content">
        <div
          className={classNames("Main-Page", "w-full")}
          style={{
            position: "absolute",
            top: displayHeadr ? headerHeight : 0,
          }}
        >
          {
            location.pathname === "/" && <LandingPage />
            // <LandingPage/>
          }
          <section className="content container mx-auto">
            <Outlet />
          </section>
        </div>
      </main>
      {displayHeadr && (
        <Header navbarState={navbarState} setNavbarState={setNavbarState} />
      )}
      {/* footer */}
      {
        displayNavbar && (
          <LeftSideBar
            ref={ref}
            state={navbarState}
            setState={setNavbarState}
          />
        )
      }
    </>
  );
}

export default App;
