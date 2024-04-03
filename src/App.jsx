import "./App.css";
import CircularAnimation from "./components/CircularAnimation";
import Header from "./components/Header";
import NameFlow from "./components/NameFlow";

function App() {
  return (
    <main className="w-100 overflow-hidden">
      <Header />
      <CircularAnimation />
      <NameFlow />

      {/* <div class="welcome-words-holder">
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
           </div> */}
    </main>
  );
}

export default App;
