import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import AboutUs from "../pages/aboutus/aboutus";
import Espeleologia from "../pages/espeleologia/espeleologia";
import Cartilhas from "../pages/cartilhas/cartilhas";
import Cursos from "../pages/cursos/cursos";
import Comissoes from "../pages/comissoes/comissoes";
import Galeria from "../pages/galeria/galeria";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/espeleologia" element={<Espeleologia />} />
            <Route path="/cartilhas" element={<Cartilhas />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/comissoes" element={<Comissoes />} />
            <Route path="/galeria" element={<Galeria />} />
        </Routes>
    );
}