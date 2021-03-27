import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import RegisterForm from '../components/RegisterForm';
import Information from '../components/Information';

const Home = () => {
	const classes = useStyles();
	return (
		<main disableGutters className={classes.root}>
			<Information />
			<RegisterForm />
			<img
				src={process.env.PUBLIC_URL + '/img/flowerOne.svg'}
				alt='Flores'
				className={classes.flowerOne}
			/>
			<img
				src={process.env.PUBLIC_URL + '/img/flowerTwo.svg'}
				alt='Flores'
				className={classes.flowerTwo}
			/>

			<img
				src={process.env.PUBLIC_URL + '/img/manchaOne.svg'}
				alt='Mancha decorativa'
				className={classes.manchaOne}
			/>
			<img
				src={process.env.PUBLIC_URL + '/img/manchaDos.svg'}
				alt='Mancha Decorativa'
				className={classes.manchadTwo}
			/>
		</main>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			maxWidth: '1280px',
			height: 'calc(100vh - 54px - 48px)',
			background: theme.palette.white,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			margin: '0 auto',
			zIndex: 0,
			position: 'relative',
		},
		flowerOne: {
			position: 'fixed',
			bottom: 0,
			right: theme.spacing(5),
			pointerEvents: 'none',
		},
		flowerTwo: {
			position: 'fixed',
			bottom: theme.spacing(20),
			right: 0,
			pointerEvents: 'none',
		},
		manchaOne: {
			position: 'fixed',
			right: 0,
			top: 0,
			pointerEvents: 'none',
		},
		manchadTwo: {
			position: 'fixed',
			left: 0,
			top: 0,
			pointerEvents: 'none',
		},
	})
);

export default Home;
