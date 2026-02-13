import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname || "/");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-green-800 text-white py-4 md:py-8 sticky top-0 z-10 border-b-2 border-green-600">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl font-bold">React Practice</h3>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={
                activeLink === "/"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={
                activeLink === "/about"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => handleLinkClick("/products")}
              className={
                activeLink === "/products"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={
                activeLink === "/contact"
                  ? "text-green-300"
                  : "hover:text-green-300"
              }
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link to={'/login'}>
          <utton className="hidden md:lock g-white text-lack px-4 py-1rounded cursor-pointer hover:g-slate-400">Login </utton></Link>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-green-800 flex flex-col items-center space-y-4 py-4 md:hidden">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className="hover:text-green-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => handleLinkClick("/about")}
                className="hover:text-green-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => handleLinkClick("/products")}
                className="hover:text-green-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className="hover:text-green-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
