import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFoundPage";
import ReactGA from "react-ga4";
import { useEffect } from "react";
const TRACKING_ID = "G-WT52RMW2M9";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Myself" });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;

{
  /* <div class="welcome-words-holder">
  <ul class="welcome-words">
    <li class="welcome-active welcome-active-first">Hello</li>
    <li class="welcome-active">Bonjour</li>
    <li class="welcome-active">स्वागत हे</li>
    <li class="welcome-active">Ciao</li>
    <li class="welcome-active">Olá</li>
    <li class="welcome-active">おい</li>
    <li class="welcome-active">Hallå</li>
    <li class="welcome-active">Guten tag</li>
    <li class="welcome-active">Hallo</li>
    <li class="welcome-active welcome-active-last">হ্যালো</li>
  </ul>
</div>; */
}
