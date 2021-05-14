import typo from './typography';
import colours from './colours';

const labels = {
	baseLabelStyles: {
		fontFamily: typo.sansSerif,
		fontSize: typo.fontSize,
		letterSpacing: typo.letterSpacing,
		padding: typo.padding,
		fill: colours.neutral,
		stroke: `transparent`,
		strokeWidth: 0
	},
	centeredLabelStyles: {
		textAnchor: `middle`
	},
};

export default labels;
