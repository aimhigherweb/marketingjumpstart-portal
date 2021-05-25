const generalProgress = (data) => {
	let clicks = 0;
	let impressions = 0;
	let cpc = 0;
	const numClicks = data.filter((seg) => seg.clicks !== 0).length;
	let cost = 0;

	data.forEach((seg) => {
		clicks += seg.clicks;
		impressions += seg.impressions;
		cost += seg.cost;
		cpc += seg.average_cpc;
	});

	return ({
		clicks,
		impressions,
		avg_cpc: cpc / numClicks,
		avg_cpm: cost / (impressions / 1000),
	});
};

module.exports = generalProgress;
