import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Beranda from "./pages/Beranda";
import Masyarakat from "./pages/Masyarakat";
import Pasien from "./pages/Pasien";
import Dokter from "./pages/Dokter";
import Artikel from "./pages/Artikel";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/masyarakat" element={<Masyarakat />} />
            <Route path="/pasien" element={<Pasien />} />
            <Route path="/dokter" element={<Dokter />} />
            <Route path="/artikel" element={<Artikel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
