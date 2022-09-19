import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export const Header = (props) => {
	const navigate = useNavigate();

	const returnHome = useCallback(
		() => navigate("/", { replace: true }),
		[navigate],
	);

	return (
		<header onClick={() => returnHome()}>
			<Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
				{props.headerText}
			</Typography>
		</header>
	);
};

Header.propTypes = {
	headerText: PropTypes.string.isRequired,
};
