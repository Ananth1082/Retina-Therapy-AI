import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          Logo
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/Approach"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Approach
          </Link>
          <Link
            to="/Implementation"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Implementation
          </Link>
          <Link
            to="/Research"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Research
          </Link>
          <Link
            to="/About"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Header };
