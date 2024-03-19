import "./App.css";
import AboutusPage from "./Pages/AboutusPage";
import HomePage from "./Pages/HomePage";
import ImplementationPage from "./Pages/ImplementationPage";
import OurApproachPage from "./Pages/OurApproachPage";
import ResearchPage from "./Pages/ResearchPage";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>

      <div className="ml-[16vw] pt-10 mt-[5rem] h-[250vh] w-[60vw]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Approach" element={<OurApproachPage />} />
          <Route path="/Implementation" element={<ImplementationPage />} />
          <Route path="/Research" element={<ResearchPage />} />
          <Route path="/About" element={<AboutusPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
