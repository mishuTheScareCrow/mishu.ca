import { NavLink } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

export default function SideNav({ navStatus }) {
  console.log(navStatus);
  const activeLinkNavigator = ({ isActive }) =>
    isActive ? "block text-white ps-5 py-2 w-full font-semibold" : "block text-white ps-5 py-2 w-full font-semibold";

  return (
    <div className={navStatus ? "sidenav" : "sidenavClosed"}>
      <div>
        <div className="sidebar-title flex justify-between text-center text-white py-4">
          <span className="ps-2">[</span>
          <h2 className="tracking-wider font-mono font-bold">mishu.ca</h2>
          <span className="pe-2">]</span>
        </div>
        <div className="flex flex-col">
          <div>
            <NavLink to="/" className={activeLinkNavigator}>
              Myself
            </NavLink>
          </div>
          <div>
            <NavLink to="/works" className={activeLinkNavigator}>
              Works
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact" className={activeLinkNavigator}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <SocialLinks />
      </div>
    </div>
  );
}
