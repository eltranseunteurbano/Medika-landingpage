import React from 'react';
import {
	makeStyles,
	createStyles,
	Typography,
	IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import cn from 'classnames';

const NavBar = () => {
	const classes = useStyles();
	return (
		<header className={cn(classes.root, 'my-3')}>
			<Typography className={classes.logo}>Medika</Typography>
			<nav className={classes.nav}>
				<IconButton className={classes.icon}>
					<MenuIcon />
				</IconButton>
			</nav>
		</header>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: '1280px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',

			position: 'sticky',
			top: '0',
			margin: '0 auto',
			zIndex: 5,
		},
		logo: {
			...theme.typography.title,
			color: theme.palette.blue,
		},
		nav: {
			display: 'flex',
		},
		icon: {
			color: theme.palette.pink,
		},
	})
);
export default NavBar;
