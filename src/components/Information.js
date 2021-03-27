import React from 'react';
import { Box, makeStyles, createStyles, Typography } from '@material-ui/core';

const Information = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Typography className={classes.text}>
				Atención médica
				<br />
				profesional, estés donde
				<br />
				estés
				<strong className={classes.textPeriod}>.</strong>
			</Typography>

			<img
				src={process.env.PUBLIC_URL + '/img/medicos.svg'}
				alt='Medicos, imagen ilustrativa'
				className={classes.img}
			/>
		</Box>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			height: '80%',
		},
		text: {
			...theme.typography.title,
			color: theme.palette.blue,
			lineHeight: '1em',
		},
		textPeriod: {
			color: theme.palette.pink,
		},
		img: {
			pointerEvents: 'none',
		},
	})
);

export default Information;
