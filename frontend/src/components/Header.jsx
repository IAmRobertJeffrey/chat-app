import { makeStyles } from '@mui/styles'
import React from 'react'
import { AppBar, Toolbar } from '@mui/material'


const useStyles = makeStyles({
	appBar: {
		zIndex: 2
	},
	toolBar: {

	}
})


const Header = () =>
{
	const classes = useStyles()
	return (
		<AppBar className={classes.appBar}>
			<Toolbar></Toolbar>
		</AppBar>
	)
}

export default Header
