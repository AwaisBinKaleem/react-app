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
      {/* <MenuUnfoldOutlined onClick={openNavbar}/> */}
      <header class="text-gray-600 body-font w-[100vw]">
        <div
          class={classNames(
            "flex flex-wrap p-5 flex-col md:flex-row items-center",
            // "pl-[50px] pr-[50px"
          )}
        >
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <div className="pl-[50px]">
          <SearchBar />
          </div>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Launchpad</a>
            <a class="mr-5 hover:text-gray-900">Collections</a>
            <a class="mr-5 hover:text-gray-900">Artists</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Connect Wallet
            {/* <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
          </button>
        </div>
      {/* <SearchBar />  */}
      </header>

    </div>
  );
}

export default Header;
