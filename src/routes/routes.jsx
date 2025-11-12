import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Cartilhas from "../pages/cartilhas/cartilhas";
import Cursos from "../pages/cursos/cursos";
import Comissoes from "../pages/comissoes/comissoes";
import AboutUs from "../pages/aboutus/aboutus";
import ScrollToTop from "../components/scrolltotop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartilhas" element={<Cartilhas />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/comissoes" element={<Comissoes />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}