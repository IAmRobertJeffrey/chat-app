import { makeStyles } from '@mui/styles'
import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'


const useStyles = makeStyles({
	appBar: {
		zIndex: "2 !important"
	},
	toolBar: {

	}
})


const Header = ({ name }) =>
{
	const classes = useStyles()
	return (
		<AppBar className={classes.appBar}>
			<Toolbar><Typography>{name}</Typography></Toolbar>
		</AppBar>
	)
}

export default Header
