import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

import Catalogo from "./pages/Catalogo";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import PisoEpoxico from "./pages/servicios/PisoEpoxico";
import Construccion from "./pages/servicios/Construccion";
import Impermeabilizacion from "./pages/servicios/Impermeabilizacion";
import Mantenimiento from "./pages/servicios/Mantenimiento";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/catalogo/pisos-epoxicos" element={<PisoEpoxico />} />
        <Route path="/construccion-industrial" element={<Construccion />} />
        <Route path="/impermeabilizacion" element={<Impermeabilizacion />} />
        <Route path="/mantenimiento-industrial" element={<Mantenimiento />} />
        

      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;