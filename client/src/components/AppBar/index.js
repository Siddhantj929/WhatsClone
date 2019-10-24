import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const a11yProps = index => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
};

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	}
}));

const NavBar = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<Icon>menu</Icon>
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						WhatsClone
					</Typography>
				</Toolbar>
				<Tabs
					value={props.value}
					onChange={props.handleChange}
					aria-label="WhatsClone Tabs"
					centered
				>
					<Tab label={props.tab1} {...a11yProps(0)} />
					<Tab label={props.tab2} {...a11yProps(1)} />
				</Tabs>
			</AppBar>
		</div>
	);
};

export default NavBar;
