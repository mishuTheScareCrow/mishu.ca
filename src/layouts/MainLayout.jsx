import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import { useState } from "react";

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <SideNav navStatus={navOpen} />
      <main className="w-100">
        <Header onClick={toggleOpen} />
        <Outlet />
      </main>
    </>
  );
}
