import React from 'react';
import {
	makeStyles,
	createStyles,
	Typography,
	Box,
	Button,
	FormControl,
	FormControlLabel,
	Checkbox,
	InputAdornment,
	IconButton,
} from '@material-ui/core';
import cn from 'classnames';
import TextField from './TextField';
import {
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';

const RegisterForm = () => {
	const classes = useStyles();
	const [termCheckBox, setTermCheckBox] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	const onHandleChangeTerms = () => {
		setTermCheckBox(!termCheckBox);
	};

	const onHandleChangePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Box className={classes.root}>
			<Typography className={cn(classes.title, 'mb-4')}>
				Crear una cuenta
			</Typography>
			<form className={classes.form}>
				<TextField
					label='Nombre y apellido'
					placeholder='Jaime Burbano'
					className={cn('mb-3')}
					fullWidth
					autoFocus
					type='text'
					required
				/>
				<TextField
					label='Correo electrónico'
					placeholder='Hablemos@jaimeburbano.com'
					className={cn('mb-3')}
					fullWidth
					type='email'
					required
				/>
				<TextField
					label='Contraseña'
					placeholder='Escribe una contraseña'
					className={cn('mb-3')}
					fullWidth
					type='password'
					required
					endAdornment={
						<InputAdornment position='end'>
							<IconButton onClick={onHandleChangePassword}>
								{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
							</IconButton>
						</InputAdornment>
					}
				/>
				<TextField
					label='Confirmar contraseña'
					placeholder='Confirma contraseña'
					className={cn('mb-1')}
					fullWidth
					type='password'
					required
				/>

				<FormControl
					component='fieldset'
					className={cn(classes.formControl, 'mb-2')}
				>
					<FormControlLabel
						control={
							<Checkbox
								checked={termCheckBox}
								onChange={onHandleChangeTerms}
								name='Accept'
								required
								color='primary'
							/>
						}
						classes={{ label: classes.label }}
						label='Acepto los términos y condiciones de servicio'
					/>
				</FormControl>

				<Box className={classes.btns}>
					<Button
						variant='contained'
						disableElevation
						color='secondary'
						fullWidth
						className={cn(classes.btn, classes.mainBtn, 'py-2', 'px-1')}
					>
						Registrarme
					</Button>
					<Button
						variant='outlined'
						disableElevation
						color='secondary'
						fullWidth
						className={cn(classes.btn, 'py-2', 'px-1')}
					>
						Ya tengo una cuenta
					</Button>
				</Box>
			</form>
		</Box>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			height: '80%',
			minWidth: '390px',
		},
		title: {
			...theme.typography.title,
			color: theme.palette.blue,
		},
		form: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'flex-start',
		},
		btns: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-bwteen',
			alignItems: 'center',
			columnGap: theme.spacing(2),
		},
		btn: {
			fontWeight: 700,
			fontFamily: 'Montserrat, sans-serif',
			textTransform: 'inherit',
		},
		mainBtn: {
			color: 'white',
		},
		formControl: {
			color: theme.palette.blue,
		},
		label: {
			...theme.typography.text,
		},
	})
);

export default RegisterForm;
