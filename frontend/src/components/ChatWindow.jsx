import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Message from './Message'
import getUnixTime from 'date-fns/getUnixTime'
import { io } from 'socket.io-client'
import fromUnixTime from 'date-fns/fromUnixTime'
import { useEffect, useMemo, useRef } from 'react'
import useForceUpdate from 'use-force-update';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => 
{
	return {
		chatContainer: {
			width: "calc(80% - 260px)",
			height: "100%",
			marginLeft: "260px",
			display: "flex",
			flexDirection: "column"

		},
		chatWindow: {
			width: "100%",
			// height: "calc(100% - 250px)",
			minHeight: "calc(100vh - 250px)",
			maxHeight: "calc(100% - 250px)",
			height: "auto",
			paddingTop: 100,
			overflow: "auto",
			paddingLeft: 10,
			paddingRight: 10,
			wordWrap: "break-word",

			// ThisIsWhereMessagesGo

		},
		chatInputBox: {
			height: 120,
			width: "100%",
			display: "flex",
			padding: "10px",
			paddingTop: "20px"

		},
		chatInput: {
			height: 125,
			width: "calc(100% - 20px)",
			display: "flex",
			gap: 10,

		},
		inputButton: {
			width: 110,
			height: 55,
		},
		inputText: {
			width: "calc(100% - 110px)",

		}
	}
})




const ChatWindow = ({ client, text, setText, messages, name, setName, messagesRef, list, setMessages, forceUpdate, dateTime, setDateTime }) =>
{






	function handleSubmit(e)
	{
		e.preventDefault();
		const now = getUnixTime((new Date()))
		const nowFormatted = fromUnixTime(now).toString()
		setDateTime(nowFormatted)

		client.emit("sendMessage", { name: name, content: text, dateTime: nowFormatted })
		setText("")

	}


	const classes = useStyles()
	return (
		<Box className={classes.chatContainer}>
			<Box className={classes.chatWindow}>


				{

					messages.map((message) => (
						<Message key={uuidv4()} name={message.name} content={message.content} dateTime={message.dateTime} />
					))
				}


			</Box>
			<Box className={classes.chatInputBox}>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className={classes.chatInput}
					noValidate
					autoComplete="off">
					<TextField
						className={classes.inputText}
						variant="outlined"
						label="Chat"
						color="primary"
						onChange={(e) => setText(e.target.value)}
						value={text}
					/>
					<Button

						className={classes.inputButton}
						startIcon={<MdOutlineKeyboardArrowRight />}
						color="primary"
						variant="contained"
						type="submit">
						Submit
					</Button>
				</form>
			</Box>
		</Box>
	)
}

export default ChatWindow
