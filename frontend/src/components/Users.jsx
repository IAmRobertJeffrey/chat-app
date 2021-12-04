import { makeStyles } from '@mui/styles'
import { Divider, Drawer } from '@mui/material'
import React from 'react'
import User from './User'
const useStyles = makeStyles((theme) =>
{

	return {
		userList: {

		},
		userPaper: {
			boxSizing: "border-box",
			width: 250,
			zIndex: "1 !important",
			height: "100%",
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
			<Divider />
			{


				users ? users.map((user) => (
					<>
						<User key={user.id} user={user} />
						<Divider />
					</>
				)
				)
					: null
			}
		</Drawer>
	)
}

export default Users
