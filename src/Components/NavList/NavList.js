import { Link } from "react-router-dom";

export const NavList = () => {
  return (
    <nav>
      <ul className="React-Router-Group">
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to="/">
            Home
          </Link>
        </li>
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to="/PageOne">
            Page 1
          </Link>
        </li>
      </ul>
    </nav>
  );
};
