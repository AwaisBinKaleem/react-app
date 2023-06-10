import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <>
      <Header/>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
