import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full h-[70px] bg-slate-900 text-white px-4 flex justify-between items-center">
      <Link to="/">
        <h2 className="select-none text-2xl font-bold tracking-wide">
          Live Pen
        </h2>
      </Link>

      <ul className="select-none text-lg">
        <li><Link to="/compiler">Compiler</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
