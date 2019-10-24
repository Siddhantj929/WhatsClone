import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		marginBottom: theme.spacing(1)
	}
}));

const Message = props => {
	const classes = useStyles();

	return (
		<div className="Message">
			<Paper className={classes.root}>
				<Typography component="p">{props.children}</Typography>
			</Paper>
		</div>
	);
};

export default Message;
