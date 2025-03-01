import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import Footer from "./components/Footer.jsx";

import Home from "./components/Home";
import FormRegister from "./components/FormRegister.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Timer/> */}
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/reg/:id" element={<FormRegister/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
