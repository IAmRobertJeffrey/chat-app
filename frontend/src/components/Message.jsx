import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => 
{

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
			width: "calc(100% - 20px)",

		}
	}
})


const Message = ({ name, content, dateTime }) =>
{
	const classes = useStyles()
	return (
		<Card className={classes.message} elevation={3}>
			<CardHeader className={classes.messageHeader} title={name} subheader={dateTime} />
			<CardContent className={classes.messageContent}>
				<Typography variant="body2">
					{content}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Message
