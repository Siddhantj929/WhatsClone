import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import AppBar from "../AppBar";

const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			<Box>{children}</Box>
		</Typography>
	);
};

const Layout = props => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="Layout">
			<AppBar
				value={value}
				tab1={props.tab1.name}
				tab2={props.tab2.name}
				handleChange={handleChange}
			/>
			<TabPanel value={value} index={0}>
				{props.tab1.content}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{props.tab2.content}
			</TabPanel>
		</div>
	);
};

export default Layout;
