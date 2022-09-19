import css from "./Navigation.module.css";
import NavOption from "./NavOption";
import PropTypes from "prop-types";

export const Navigation = (props) => {
	const navItems = props.routes;

	return (
		<nav className={css.ReactRouterGroup} data-testid="nav">
			{navItems.map((item) => {
				return (
					<NavOption
						key={item.id}
						id={item.id}
						label={item.label}
						route={item.route}
						ariaLabel={item.ariaLabel}
					/>
				);
			})}
		</nav>
	);
};

Navigation.propTypes = {
	routes: PropTypes.array.isRequired,
};
