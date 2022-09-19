import { Box, Typography } from "@mui/material";
import PageHeading from "../../Components/PageHeading";

export const FeatureOne = () => {
	return (
		<Box mx={2}>
			<PageHeading pageHeading="Insert Title - Feature One" />
			<Typography variant="body1" paragraph>
        Insert content here
			</Typography>
		</Box>
	);
};
