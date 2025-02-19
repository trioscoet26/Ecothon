import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50 bg-neutral-900 backdrop-blur-md text-white shadow-lg border-b border-yellow-500/30">
        <header className="flex justify-between items-center px-8 py-6">
          <h1 className="text-2xl font-bold">
            <span className="text-[#FFB302]">WildLife</span> Tracker
          </h1>
          <nav>
            <ul className="flex space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "Wildlife Map", path: "/wildlife-map" },
                { name: "Protection Guide", path: "/protection-guide" },
                { name: "Community", path: "/community" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="relative hover:text-yellow-400 transition duration-300 ease-in-out"
                  >
                    {item.name}
                    {/* Glowing Underline on Hover */}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_6px_#facc15]" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Thin Glowing Border */}
        <div className="w-full h-[1px] bg-yellow-500/50 shadow-[0_0_8px_#facc15] animate-pulse" />
      </div>
    </>
  );
};

export default Navbar;
