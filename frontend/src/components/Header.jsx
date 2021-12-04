import { makeStyles } from '@mui/styles'
import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'


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
