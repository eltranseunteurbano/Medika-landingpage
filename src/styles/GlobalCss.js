import { createStyles, withStyles } from '@material-ui/core';
import theme from './theme';
import getSpacingHelpers from '../utils/getSpacingHelpers';

const GlobalCss = withStyles(() =>
	createStyles({
		'@global': {
			'*': {
				margin: 0,
				padding: 0,
				transition: 'all .4s',
			},
			...getSpacingHelpers(theme),
		},
	})
)(() => null);

export default GlobalCss;
