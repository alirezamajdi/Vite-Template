import { Link } from "react-router-dom";
import logo from "/public/images/logo.png";

const Header = () => {
  return (
    <header className="mb-5 w-screen py-3 shadow-xl">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" width={40} />
        </Link>
        <span>Header</span>
      </div>
    </header>
  );
};
export default Header;
