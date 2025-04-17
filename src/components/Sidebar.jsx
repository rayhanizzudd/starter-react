import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Beranda" },
    { to: "/masyarakat", label: "Masyarakat" },
    { to: "/pasien", label: "Pasien" },
    { to: "/dokter", label: "Dokter" },
    { to: "/artikel", label: "Artikel" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0 p-6">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`py-2 px-4 rounded hover:bg-gray-700 transition ${
              location.pathname === link.to ? "bg-gray-700" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
