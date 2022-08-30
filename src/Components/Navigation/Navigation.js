import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.ReactRouterGroup}>
      <Link
        className={css.ReactRouterLinks}
        to="/"
        aria-label="Feature One Link"
      >
        Feature One
      </Link>
      <Link
        className={css.ReactRouterLinks}
        to="/FeatureTwo"
        aria-label="Feature Two Link"
      >
        Feature Two
      </Link>
    </nav>
  );
};
