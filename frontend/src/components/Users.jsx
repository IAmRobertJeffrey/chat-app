import { makeStyles } from '@mui/styles'
import { Drawer } from '@mui/material'
import React from 'react'

const useStyles = makeStyles((theme) =>
{

	return {
		userList: {

		},
		userPaper: {
			width: 250,
			zIndex: "1 !important",
		}
	}
})

const Users = () =>
{


	const classes = useStyles()
	return (
		<Drawer anchor="left" classes={{ paper: classes.userPaper }} className={classes.userList} variant="permanent">

		</Drawer>
	)
}

export default Users
