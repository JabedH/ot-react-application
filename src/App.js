import logo from "./logo.svg";
import "./App.css";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home/Home";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
