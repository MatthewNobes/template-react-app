import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const Navigation = (props) => {
	const navigate = useNavigate();
	const navItems = props.routes;

	return (
		<List>
			{navItems.map((item) => (
				<ListItem key={item.id} disablePadding>
					<ListItemButton
						aria-label={item.ariaLabel}
						onClick={useCallback(
							() => navigate(item.route, { replace: true }),
							[navigate],
						)}
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={item.label} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

Navigation.propTypes = {
	routes: PropTypes.array.isRequired,
};
