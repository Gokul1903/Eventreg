import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import CardList from "./components/CardList";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Register from "./components/reg";
import Footer from "./components/footer";
import Timer from "./components/timer";
import Banner from "./components/banner";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Timer/> */}
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/reg/:id" element={<Register />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
