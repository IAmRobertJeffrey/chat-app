import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Message from './Message'
import getUnixTime from 'date-fns/getUnixTime'
import { Card } from '@mui/material'

import fromUnixTime from 'date-fns/fromUnixTime'

import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => 
{
	return {
		chatContainer: {
			width: "calc(100% - 270px)",
			height: "100%",
			marginLeft: "250px",
			display: "flex",
			flexDirection: "column",


		},
		chatWindow: {
			width: "100%",

			// height: "calc(100% - 250px)",
			minHeight: "calc(100vh - 250px)",
			maxHeight: "calc(100% - 250px)",
			height: "auto",
			paddingTop: 100,
			overflow: "auto",
			paddingLeft: 20,

			wordWrap: "break-word",


			// ThisIsWhereMessagesGo

		},
		chatInputBox: {
			height: 120,
			width: "calc(100% - 20px)",
			display: "flex",
			padding: "20px",
			paddingTop: "20px",
			backgroundColor: theme.palette.primary.dark,
			alignItems: "center"

		},
		chatInput: {
			height: 100,
			width: "calc(100% - 20px)",
			display: "flex",
			gap: 10,
			alignItems: "center"

		},
		inputButton: {
			width: 110,
			height: 55,
		},
		inputText: {
			width: "calc(100% - 110px)",
			backgroundColor: "white",
			height: "fit-content",

		},
		bottomBox: {

		}
	}
})




const ChatWindow = ({ scroll, client, text, setText, messages, name, setName, messagesRef, list, setMessages, forceUpdate, dateTime, setDateTime }) =>
{






	function handleSubmit(e)
	{
		e.preventDefault();
		if (text)
		{
			const now = getUnixTime((new Date()))
			const nowFormatted = fromUnixTime(now).toString()
			setDateTime(nowFormatted)

			client.emit("sendMessage", { name: name, content: text, dateTime: nowFormatted })
			setText("")
		}


	}


	const classes = useStyles()
	return (
		<Card elevation={4} sx={{ paddingLeft: "20px", backgroundColor: "#1565c0" }} className={classes.chatContainer}>
			<Box className={classes.chatWindow}>
				{

					messages.map((message) => (
						<Message key={uuidv4()} name={message.name} content={message.content} dateTime={message.dateTime} />

					))
				}


				<div className={classes.bottomBox} ref={scroll} />
			</Box>

			<Box className={classes.chatInputBox}>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className={classes.chatInput}
					noValidate
					autoComplete="off">
					<TextField
						// sx={{ border: "1px solid white", borderRadius: "4px" }}
						className={classes.inputText}
						variant="filled"
						label="Chat"
						color="primary"
						onChange={(e) => setText(e.target.value)}
						value={text}
					/>
					<Button

						className={classes.inputButton}
						startIcon={<MdOutlineKeyboardArrowRight />}
						color="error"
						variant="contained"
						type="submit">
						Submit
					</Button>
				</form>
			</Box>
		</Card>
	)
}

export default ChatWindow
