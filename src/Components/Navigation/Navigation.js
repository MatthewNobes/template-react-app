import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.ReactRouterGroup}>
      <Link className={css.ReactRouterLinks} to="/">
        Feature One
      </Link>
      <Link className={css.ReactRouterLinks} to="/FeatureTwo">
        Feature Two
      </Link>
    </nav>
  );
};
