import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";

function Root() {
  return (
    <>
      <Header/>
      {/* <LeftSideBar/> */}
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
