import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import fromUnixTime from 'date-fns/fromUnixTime'

const useStyles = makeStyles((theme) => 
{
	console.log(theme);
	return {
		messageHeader: {
			"font-size": "2pt"
		},
		messageContent: {
			paddingTop: "0px !important",


		},
		message: {
			marginBottom: "2rem",
			// backgroundColor: `${theme.palette.primary.dark} !important`,

		}
	}
})


const Message = ({ name, content, dateTime }) =>
{
	const classes = useStyles()
	return (
		<Card className={classes.message} elevation={3}>
			<CardHeader className={classes.messageHeader} title={name} subheader={fromUnixTime(dateTime).toString()} />
			<CardContent className={classes.messageContent}>
				<Typography variant="body2">
					{content}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Message
