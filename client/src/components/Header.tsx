import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="w-full h-[70px] bg-slate-900 text-white px-4 flex justify-between items-center">
      <Link to="/">
        <h2 className="select-none text-3xl font-gilroyRegular tracking-wide">
          Web Editor
        </h2>
      </Link>

      <ul className="select-none text-lg font-gilroyRegular tracking-wider">
        <li><Link to="/compiler"><Button className="font-semibold">Compiler</Button></Link></li>
      </ul>
    </nav>
  );
};

export default Header;
