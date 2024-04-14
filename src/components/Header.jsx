import { Link } from "react-router-dom";
import logo from "../assets/images/logoMemoji.png";
export default function Header() {
  return (
    <header className="p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img className="rounded-full w-16 h-16" src={logo} />
        </div>
        <div className="bg-white rounded-full p-1">
          <ul className="list-none flex">
            <li className="me-1">
              <Link to="/" className="block bg-gray-300 border border-transparent hover:bg-gray-400 px-5 py-2 rounded-full">
                Myself
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/works" className="block border border-gray-300 hover:bg-gray-400 hover:border-transparent px-5 py-2 rounded-full">
                Works
              </Link>
            </li>
            <li className="ms-1">
              <Link
                to="/contact"
                className="block border border-gray-300 hover:bg-gray-400 hover:border-transparent px-5 py-2 rounded-full"
              >
                Contact
              </Link>
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
