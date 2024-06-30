import "./Navbar.css";
import logo from "../../Asserts/new_logo.jpg";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">S.</div>
      <ul>
        <li>
          <span>01.</span>About
        </li>
        <li>
          <span>02.</span>skill
        </li>
        <li>
          <span>03.</span>Work
        </li>
        <li>
          <button className="btn btnHighlight">Contact Me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
