import css from "./Header.module.css";

export const Header = (props) => {
  return <h1 className={css.Header}>{props.headerText}</h1>;
};
