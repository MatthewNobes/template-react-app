import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="React-Router-Group">
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to="/">
            Feature One
          </Link>
        </li>
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to="/FeatureTwo">
            Feature Two
          </Link>
        </li>
      </ul>
    </nav>
  );
};
