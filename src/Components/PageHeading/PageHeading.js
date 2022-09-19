import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export const PageHeading = (props) => {
	return (
		<Typography component="h2" variant="h3">
			{props.pageHeading}
		</Typography>
	);
};

PageHeading.propTypes = {
	pageHeading: PropTypes.string.isRequired,
};
