import {
	VictoryLine, VictoryScatter,
	VictoryGroup, VictoryAxis, VictoryChart,
	VictoryTooltip, VictoryLegend, VictoryLabel
} from 'victory';
import theme, { colourList } from '../theme';

const LineChart = ({ data, labels }) => (
	<VictoryChart theme={theme}>
		<VictoryAxis
			crossAxis
			tickCount={5}
			tickLabelComponent={
				<VictoryLabel
					angle={-40}
					textAnchor='end'
					style={{
						fontSize: 5
					}}
				/>
			}
		/>
		<VictoryAxis
			dependentAxis
		/>
		{labels && (
			<VictoryLegend
				data={labels}
				x={0}
				y={0}
			/>
		)}
		{data.map((group, index) => (
			<VictoryGroup
				key={index}
				color={colourList[index]}
				name={group.id}
			>
				<VictoryLine
					data={group.points}
				/>
				<VictoryScatter
					data={group.points}
					size={1}
					labels={({ datum }) => `${datum.date || datum.x}: ${datum.y} ${group.yUnit}`}
					labelComponent={
						<VictoryTooltip
							constrainToVisibleArea
						/>
					}
				/>
			</VictoryGroup>
		))}
	</VictoryChart>
);

export default LineChart;
