import React from 'react';
import {
	makeStyles,
	createStyles,
	TextField as MuiTextField,
} from '@material-ui/core';

const TextField = (props) => {
	const classes = useStyles();
	return (
		<MuiTextField
			{...props}
			variant='outlined'
			InputLabelProps={{
				shrink: false,
				notched: true,
				classes: { formControl: classes.label },
			}}
			classes={{ root: classes.root }}
			InputProps={{
				classes: {
					input: classes.input,
				},
			}}
		/>
	);
};

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			borderColor: 'yellow',
			color: `${theme.palette.blue}60`,

			'& fieldset': {
				borderColor: theme.palette.blue,
				borderWidth: 1,
				color: `${theme.palette.blue}60`,
			},
			'& input:valid:focus + fieldset': {
				padding: '1px !important', // override inline-style
			},
		},
		label: {
			position: 'unset',
			transform: 'unset !important',
			marginBottom: '0.5em',
			...theme.typography.label,
			color: theme.palette.blue,
			'&[data-shrink="false"] + .MuiInputBase-formControl .MuiInputBase-input::placeholder': {
				opacity: '0.42 !important',
				transition: 'none !important',
			},
		},
		input: {
			color: theme.palette.blue,
		},
	})
);

export default TextField;
