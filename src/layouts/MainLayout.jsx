import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="w-100 overflow-hidden">
      <Header />
      <Outlet />
    </main>
  );
}
