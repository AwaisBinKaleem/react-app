import classNames from 'classnames'
import React from 'react'

function SearchBar() {
  return (
    <>
     <div>
  <div class="relative flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class={classNames(
        'bg-white pl-[10px]'
      )}
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />

    {/* <!--Search button--> */}
    <button
      class={classNames(
        "relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg",
        "bg-black"
      )}
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div> 
    </>
  )
}

export default SearchBar
