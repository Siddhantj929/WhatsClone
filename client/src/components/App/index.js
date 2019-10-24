import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple, orange } from "@material-ui/core/colors";

import Layout from "../Layout";
import UserList from "../UserList";
import Broadcast from "../Broadcast";

import "./index.css";

const theme = createMuiTheme({
	palette: {
		primary: deepPurple,
		secondary: {
			main: orange["A100"]
		}
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Layout
					tab1={{
						name: "Broadcast",
						content: Broadcast
					}}
					tab2={{
						name: "Chats",
						content: <UserList items={[1, 2, 3, 4, 50]} />
					}}
				/>
			</div>
		</ThemeProvider>
	);
};

export default App;
