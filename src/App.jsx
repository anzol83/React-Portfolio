import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; 
import SkillsPage from "./components/SkillsPage";
import DarkModeToggle from "./components/DarkModeToggle";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <>
      <DarkModeToggle />
      <div className="wrapper-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>

        <Footer />
        <GoToTop />
      </div>
    </>
  );
}

export default App;
