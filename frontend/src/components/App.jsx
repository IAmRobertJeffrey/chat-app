
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Header';
import Users from './Users';
import ChatWindow from './ChatWindow';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import NameEntry from '../pages/NameEntry';
import { useEffect, useMemo, useRef } from 'react'
import useForceUpdate from 'use-force-update';
import { io } from 'socket.io-client'


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
const client = io(`https://roberts-chatting.herokuapp.com`);

function App()
{

	const [name, setName] = useState("")
	const forceUpdate = useForceUpdate();
	const [text, setText] = useState("")
	const [dateTime, setDateTime] = useState()
	const [messages, setMessages] = useState([])
	const list = useMemo(() => [], []);
	const messagesRef = useRef([])
	const [users, setUsers] = useState([])
	const scroll = useRef()

	const scrollToBottom = () =>
	{
		scroll.current?.scrollIntoView({ behavior: "smooth" })
	}


	useEffect(() =>
	{

		scrollToBottom();

		client.on("connect", () =>
		{

			client.on("distributeMessage", (data) =>
			{

				messagesRef.current.push(data)
				list.push(data)
				setMessages(messagesRef.current)

				forceUpdate();
				scrollToBottom();
			})

			client.on("distributeName", (usersList) =>
			{
				setUsers(usersList)
				console.log(usersList);
				scrollToBottom();
			})

			client.on("disconnect", () =>
			{
				// const now = getUnixTime((new Date()))
				// const nowFormatted = fromUnixTime(now).toString()
				// client.emit("sendMessage", { name: `${capitalizeFirstLetter(text)} has left`, content: ``, dateTime: nowFormatted })
			})
		})

	}, [dateTime, list, messagesRef, forceUpdate, setName, setMessages])



	return (
		<ThemeProvider theme={theme}>
			<div style={{ backgroundColor: theme.palette.primary.dark }} className="App">
				<Header name={name} />
				{
					!name ?
						<NameEntry client={client} name={name} setName={setName} />
						:
						<>
							<Users users={users} />
							<ChatWindow scroll={scroll} client={client} list={list} messagesRef={messagesRef} messages={messages} setMessages={setMessages} forceUpdate={forceUpdate} text={text} setText={setText} dateTime={dateTime} setDateTime={setDateTime} setName={setName} name={name} />
						</>
				}
			</div>
		</ThemeProvider>
	);
}

export default App;
