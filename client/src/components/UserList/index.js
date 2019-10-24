import React, { Fragment } from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import UserListItem from "../UserListItem";

const UserList = props => {
	return (
		<div className="UserList">
			<List>
				{props.items.map((item, i) => (
					<Fragment>
						<UserListItem />
						{i !== props.items.length - 1 && (
							<Divider
								variant="inset"
								component="li"
								style={{ width: "80%" }}
							/>
						)}
					</Fragment>
				))}
			</List>
		</div>
	);
};

export default UserList;
