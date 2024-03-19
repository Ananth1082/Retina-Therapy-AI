import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4 fixed top-0 w-[100vw] h-20">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">Logo</div>
            <div>
              <Link to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/Approach">
                <Button>Approach</Button>
              </Link>
              <Link to="/Implementation">
                <Button>Implementation</Button>
              </Link>
              <Link to="/Research">
                <Button>Research</Button>
              </Link>
              <Link to="/About">
                <Button>About</Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export { Header };
