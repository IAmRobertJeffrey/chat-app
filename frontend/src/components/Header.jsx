import { makeStyles } from '@mui/styles'
import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'


const useStyles = makeStyles({
	appBar: {
		zIndex: "2 !important",
	},
	toolBar: {

	}
})


const Header = ({ name }) =>
{

	const classes = useStyles()
	return (
		<AppBar className={classes.appBar}>
			{
				name && <Toolbar><Button variant="contained" color="info">{name}</Button></Toolbar>
			}

		</AppBar>
	)
}

export default Header
