import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Portfolios from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


