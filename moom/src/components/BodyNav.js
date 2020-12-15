import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BodyNav extends Component {
  // 바디 컴포넌트의 네비 바
  render() {
    return (
      <>
        <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="/"
              class="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Basic Body
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="/custom"
              class="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Custom Body
            </a>
          </div>
        </div>

        <div class="flex m-2">
          <button
            class="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-300  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
          >
            <div class="flex leading-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left w-5 h-5"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Basic
            </div>
          </button>
          <button
            class="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200 
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
          >
            <div class="flex leading-5">
              Custom
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right w-5 h-5 ml-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </button>
        </div>

        {/* 번호 */}
        <ul class="flex">
          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a class="font-bold" href="#">
              1
            </a>
          </li>
          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a class="font-bold" href="#">
              2
            </a>
          </li>
        </ul>
      </>
    );
  }
}

// withStyles(styles)
export default withRouter(BodyNav);
