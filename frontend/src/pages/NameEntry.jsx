import React from 'react'
import { makeStyles } from '@mui/styles'
import { Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import getUnixTime from 'date-fns/getUnixTime'
import fromUnixTime from 'date-fns/fromUnixTime'

const useStyles = makeStyles((theme) => 
{
	return {
		nameEntryContainer: {
			width: "100%",
			height: "100%",
			maxWidth: "100%",
			zIndex: "9 !important",
			backgroundColor: theme.palette.primary.main,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			gap: "100px"
		},
		form: {
			display: "flex",
			width: 500,
			gap: 10,
			border: "10px solid white"

		},
		field: {

		},
		nameCard: {

		}
	}
});
const NameEntry = ({ name, setName, client }) =>
{
	const classes = useStyles()
	const [nameError, setNameError] = useState();
	const [text, setText] = useState("")


	function capitalizeFirstLetter(string)
	{
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function handleSubmit(e)
	{

		setNameError(false)
		e.preventDefault()

		if (!text)
		{

			setNameError(true)
		}
		else
		{

			setNameError(false)
			setName(capitalizeFirstLetter(text))
			const now = getUnixTime((new Date()))
			const nowFormatted = fromUnixTime(now).toString()
			client.emit("sendMessage", { name: "Server", content: `${capitalizeFirstLetter(text)} has joined`, dateTime: nowFormatted })
			client.emit("setName", (client.id, capitalizeFirstLetter(text)))
		}

	}

	return (
		<div className={classes.nameEntryContainer}>
			<Typography color="white" variant="h1">Online Chat</Typography>
			<Card className={classes.nameCard} elevation={3}>
				<form
					className={classes.form}
					onSubmit={(e) => handleSubmit(e)}
					noValidate
					autoComplete="off">
					<TextField

						error={nameError}
						onChange={(e) => setText(e.target.value.replace(/\s/g, ''))}
						className={classes.field}
						variant="outlined"
						label="Username"
						fullWidth
						required />



					<Button
						startIcon={<MdOutlineKeyboardArrowRight />}
						color="error"
						variant="contained"
						type="submit">
						Submit
					</Button>
				</form>
			</Card>
		</div>
	)
}

export default NameEntry
