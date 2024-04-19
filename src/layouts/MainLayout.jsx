import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

export default function MainLayout() {
  return (
    <>
      <SideNav />
      <main className="w-100">
        <Header />
        <Outlet />
      </main>
    </>
  );
}
