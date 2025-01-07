import { Link } from "react-router-dom";
import logo from "/public/images/logo.png";

const Footer = () => {
  return (
    <footer className="mt-5 w-screen border-t border-gray-300 py-3">
      <div className="container flex items-center justify-between">
        <span>Footer</span>
        <Link to="/">
          <img src={logo} alt="logo" width={40} />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
