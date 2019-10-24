import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

const UserListItem = () => {
	return (
		<div className="UserListItem">
			<ListItem alignItems="flex-start" button>
				<ListItemAvatar>
					<Badge
						badgeContent={999}
						color="primary"
						overlap="circle"
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right"
						}}
					>
						<Avatar
							alt="Default"
							src={require("../../images/default.svg")}
						/>
					</Badge>
				</ListItemAvatar>
				<ListItemText
					primary="Photos"
					secondary="Jan 9, 2014"
					style={{ marginLeft: 8 }}
				/>
			</ListItem>
		</div>
	);
};

export default UserListItem;
