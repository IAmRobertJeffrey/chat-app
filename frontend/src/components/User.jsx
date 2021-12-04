import React from 'react'
import { Typography } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Avatar } from '@mui/material'

const useStyles = makeStyles((theme) =>
{
	return {
		navBox: {

		},
		list: {

		},
		listItem:
		{
			// backgroundColor: theme.palette.primary.dark,

		}
	}
})

const User = ({ user }) =>
{
	const classes = useStyles()
	return (

		<ListItem className={classes.listItem}>
			<ListItemIcon >
				<Avatar className={classes.avatar}>{user.name[0].toUpperCase()}</Avatar>
			</ListItemIcon>
			<ListItemText primary={<Typography>{user.name}</Typography>} />
		</ListItem>



	)
}

export default User
