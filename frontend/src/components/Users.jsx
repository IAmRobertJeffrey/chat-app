import { makeStyles } from '@mui/styles'
import { Drawer } from '@mui/material'
import React from 'react'
import User from './User'
const useStyles = makeStyles((theme) =>
{

	return {
		userList: {

		},
		userPaper: {
			width: 250,
			zIndex: "1 !important",
			paddingTop: 100,
		}
	}
})

const Users = ({ users }) =>
{
	console.log("USERS: ", users);

	const classes = useStyles()
	return (
		<Drawer anchor="left" classes={{ paper: classes.userPaper }} className={classes.userList} variant="permanent">
			{


				users ? users.map((user) => (
					<User key={user.id} user={user} />

				)
				)
					: null
			}
		</Drawer>
	)
}

export default Users
