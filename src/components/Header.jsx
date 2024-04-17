import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoMemoji.png";
// import { useEffect, useRef, useState } from "react";
export default function Header() {
  // const [navHeight, setNavHeight] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   setNavHeight(ref.current.clientHeight);
  // });

  const activeLinkNavigator = ({ isActive }) =>
    isActive
      ? "block border bg-gray-300 border-transparent hover:bg-gray-400 px-5 py-2 rounded-full"
      : "block border border-gray-300 hover:bg-gray-400 hover:border-transparent px-5 py-2 rounded-full";

  return (
    //Add 'ref={ref}' to header tag
    <header className="p-4 z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img className="rounded-full w-16 h-16" src={logo} />
        </div>
        <div className="bg-white rounded-full p-1">
          <ul className="list-none flex">
            <li className="me-1">
              <NavLink to="/" className={activeLinkNavigator}>
                Myself
              </NavLink>
            </li>
            <li className="mx-1">
              <NavLink to="/works" className={activeLinkNavigator}>
                Works
              </NavLink>
            </li>
            <li className="ms-1">
              <NavLink to="/contact" className={activeLinkNavigator}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-white w-16 h-16 rounded-full flex justify-center items-center">
            <svg
              width="24px"
              height="24px"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path d="M3 5H11" stroke="#000000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12H16" stroke="#000000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 19H21" stroke="#000000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
