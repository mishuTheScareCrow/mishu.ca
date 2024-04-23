import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import MobileNav from "../components/mobile/MobileNav";

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      {!isMobile && <SideNav navStatus={navOpen} />}
      <main className="container mx-auto">
        {!isMobile ? <Header onClick={toggleOpen} /> : <MobileNav />}
        <div className={!isMobile ? "container mx-auto" : "container mx-auto px-4"}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
