import colours from './colours';
import labels from './labels';
import typo from './typography';

export const colourList = Object.values(colours);

const baseProps = {
		width: 350,
		height: 200,
		padding: 50
	},
	strokeDasharray = `10, 5`,
	strokeLinecap = `round`,
	strokeLinejoin = `round`;

// eslint-disable-next-line one-var
const theme = {
	area: {
		...baseProps,
		style: {
			data: {
				fill: colours.neutral
			},
			labels: labels.baseLabelStyles
		}
	},
	axis: {
		...baseProps,
		style: {
			axis: {
				fill: `transparent`,
				stroke: colours.neutralLight,
				strokeWidth: 2,
				strokeLinecap,
				strokeLinejoin
			},
			axisLabel: {
				...labels.centeredLabelStyles,
				padding: typo.padding,
				stroke: `transparent`
			},
			grid: {
				fill: `none`,
				stroke: colours.neutralLight,
				strokeDasharray,
				strokeLinecap,
				strokeLinejoin,
				pointerEvents: `painted`
			},
			ticks: {
				fill: `transparent`,
				size: 5,
				stroke: colours.neutralLight,
				strokeWidth: 1,
				strokeLinecap,
				strokeLinejoin
			},
			tickLabels: {
				...labels.baseLabelStyles,
				fill: colours.neutral
			}
		}
	},
	polarDependentAxis: {
		style: {
			ticks: {
				fill: `transparent`,
				size: 1,
				stroke: `transparent`
			}
		}
	},
	bar: {
		...baseProps,
		style: {
			data: {
				fill: colours.neutral,
				padding: typo.padding,
				strokeWidth: 0
			},
			labels: labels.baseLabelStyles
		}
	},
	boxplot: {
		...baseProps,
		style: {
			max: { padding: typo.padding, stroke: colours.neutral, strokeWidth: 1 },
			maxLabels: { ...labels.baseLabelStyles, padding: 3 },
			median: { padding: typo.padding, stroke: colours.neutral, strokeWidth: 1 },
			medianLabels: { ...labels.baseLabelStyles, padding: 3 },
			min: { padding: typo.padding, stroke: colours.neutral, strokeWidth: 1 },
			minLabels: { ...labels.baseLabelStyles, padding: 3 },
			q1: { padding: typo.padding, fill: colours.neutral },
			q1Labels: { ...labels.baseLabelStyles, padding: 3 },
			q3: { padding: typo.padding, fill: colours.neutral },
			q3Labels: { ...labels.baseLabelStyles, padding: 3 }
		},
		boxWidth: 20
	},
	candlestick: {
		...baseProps,
		style: {
			data: {
				stroke: colours.neutral
			},
			labels: { ...labels.baseLabelStyles, padding: 5 }
		},
		candleColors: {
			positive: `#ffffff`,
			negative: colours.neutral
		}
	},
	chart: { ...baseProps },
	errorbar: {
		...baseProps,
		borderWidth: 8,
		style: {
			data: {
				fill: `transparent`,
				opacity: 1,
				stroke: colours.neutral,
				strokeWidth: 2
			},
			labels: labels.baseLabelStyles
		}
	},
	group: {
		...baseProps,
		colorScale: colourList
	},
	histogram: {
		...baseProps,
		style: {
			data: {
				fill: colours.neutral,
				stroke: colours.neutral,
				strokeWidth: 2
			},
			labels: labels.baseLabelStyles
		}
	},
	legend: {
		colorScale: colourList,
		gutter: 10,
		orientation: `vertical`,
		titleOrientation: `top`,
		style: {
			data: {
				type: `circle`
			},
			labels: labels.baseLabelStyles,
			title: { ...labels.baseLabelStyles, padding: 5 }
		}
	},
	line: {
		...baseProps,
		style: {
			data: {
				fill: `transparent`,
				opacity: 1,
				stroke: colours.neutral,
				strokeWidth: 1
			},
			labels: labels.baseLabelStyles
		}
	},
	pie: {
		...baseProps,
		colorScale: colourList,
		style: {
			data: {
				padding: typo.padding,
				stroke: `#ffffff`,
				strokeWidth: 1
			},
			labels: { ...labels.baseLabelStyles, padding: 20 }
		}
	},
	scatter: {
		...baseProps,
		style: {
			data: {
				fill: colours.primary,
				opacity: 1,
				stroke: `transparent`,
				strokeWidth: 1
			},
			labels: labels.baseLabelStyles
		}
	},
	stack: {
		...baseProps,
		colorScale: colours.colors
	},
	tooltip: {
		style: {
			...labels.baseLabelStyles,
			padding: 0,
			pointerEvents: `none`
		},
		flyoutStyle: {
			stroke: colours.neutral,
			strokeWidth: 0,
			fill: `transparent`,
			pointerEvents: `none`
		},
		flyoutPadding: 5,
		cornerRadius: 5,
		pointerLength: 10
	},
	voronoi: {
		...baseProps,
		style: {
			data: {
				fill: `transparent`,
				stroke: `transparent`,
				strokeWidth: 0
			},
			labels: {
				...labels.baseLabelStyles, padding: 5, pointerEvents: `none`
			},
			flyout: {
				stroke: colours.neutral,
				strokeWidth: 1,
				fill: `#f0f0f0`,
				pointerEvents: `none`
			}
		}
	},
};

export default theme;
