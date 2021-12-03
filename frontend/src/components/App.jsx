
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Header';
import Users from './Users';
import ChatWindow from './ChatWindow';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	// overrides: {
	// 	MuiTouchRipple: {
	// 		// Name of the rule
	// 		child: {
	// 			// Some CSS
	// 			backgroundColor: "white",
	// 			opacity: 1,
	// 		}
	// 	},
	// },
	// typography: {
	// 	fontFamily: "Poppins",
	// 	fontWeightLight: 400,
	// 	fontWeightRegular: 500,
	// 	fontWeightMedium: 600,
	// 	fontWeightBold: 700
	// },
	// palette: {
	// 	primary: {
	// 		main: "#A3242E",
	// 		light: "#b93742",
	// 		dark: "#7a1720"
	// 	},
	// 	secondary: {
	// 		main: "#423fc0",
	// 		light: "#24a399",
	// 		dark: "#2f2da0"
	// 	}
	// }


})


function App()
{
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Users />
				<ChatWindow />
			</div>
		</ThemeProvider>
	);
}

export default App;
