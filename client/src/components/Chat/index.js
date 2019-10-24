import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import Message from "../Message";

const Chat = props => {
	return (
		<div className="Chat">
			<List>
				{props.chats.map(item => (
					<Fragment>
						<ListItem alignItems="flex-start" button>
							<ListItemAvatar>
								<Avatar
									alt="Default"
									src={require("../../images/default.svg")}
								/>
							</ListItemAvatar>
							<ListItemText
								primary={<Message>{item.message}</Message>}
								secondary="Jan 9, 2014"
							/>
						</ListItem>
					</Fragment>
				))}
			</List>
		</div>
	);
};

export default Chat;
