const getSpacingHelpers = (theme) => {
	const sides = ['t', 'r', 'b', 'l', 'x', 'y', ''];
	const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'auto'];
	const properties = ['margin', 'padding'];
	const classes = {};

	sides.forEach((side) => {
		sizes.forEach((size) => {
			properties.forEach((property) => {
				let obj = {};
				let value =
					(typeof size === 'string'
						? size
						: Math.round(size * theme.spacing()) + 'px') + '!important';

				if (!size || side === 'y' || side === 't')
					obj[property + 'Top'] = value;
				if (!size || side === 'x' || side === 'l')
					obj[property + 'Left'] = value;
				if (!size || side === 'y' || side === 'b')
					obj[property + 'Bottom'] = value;
				if (!size || side === 'x' || side === 'r')
					obj[property + 'Right'] = value;

				classes[`.${property[0]}${side}-${size}`] = obj;
			});
		});
	});

	return classes;
};

export default getSpacingHelpers;
