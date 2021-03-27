import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#07227B' },
		secondary: { main: '#F26CA7' },
		blue: '#07227B',
		pink: '#F26CA7',
	},
	typography: {
		title: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: 700,
			fontSize: '2.25em',
			letterSpacing: '-0.05em',
		},
		text: {
			fontFamily: 'Open Sans, sans-serif',
			fontWeight: 400,
			fontSize: '1em',
		},
		label: {
			fontFamily: 'Montserrat, sans-serif',
			fontWeight: 700,
			fontSize: '0.75em',
		},
	},
});

export default theme;
