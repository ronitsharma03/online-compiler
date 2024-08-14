import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full h-[70px] bg-slate-900 text-white px-4 flex justify-between items-center">
      <Link to="/">
        <h2 className="select-none text-3xl font-gilroyRegular tracking-wide">
          Web Editor
        </h2>
      </Link>

      
    </nav>
  );
};

export default Header;
