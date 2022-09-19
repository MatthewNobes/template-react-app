import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./NavOption.module.css";

export const NavOption = (props) => {
	return (
		<Link
			id={props.id}
			className={css.ReactRouterLinks}
			to={props.route}
			aria-label={props.ariaLabel}
		>
			{props.label}
		</Link>
	);
};

NavOption.propTypes = {
	route: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
