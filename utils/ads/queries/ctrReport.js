const ctrReport = (data) => {
	const groups = {};

	data.forEach((seg) => {
		const id = seg.ad_group_id;
		const headlines = seg.responsive_search_ad_headlines;
		const descriptions = seg.responsive_search_ad_descriptions;

		if (!groups[id]) {
			groups[id] = {
				name: seg.ad_group_name,
				campaign: seg.campaign_name,
				stats: [
					{
						clicks: seg.clicks,
						impressions: seg.impressions,
						average_cpc: seg.average_cpc,
					}
				],
				ads: [
					{
						headlines: headlines && JSON.parse(headlines),
						descriptions: descriptions && JSON.parse(descriptions)
					}
				]
			};
		} else {
			const { stats, ads } = groups[id];

			groups[id].stats = [
				...stats,
				{
					clicks: seg.clicks,
					impressions: seg.impressions,
					average_cpc: seg.average_cpc,
				}
			];

			groups[id].ads = [
				...ads,
				{
					headlines: headlines && JSON.parse(headlines),
					descriptions: descriptions && JSON.parse(descriptions)
				}
			];
		}
	});

	const stats = Object.keys(groups).map((id) => {
		let clicks = 0;
		let impressions = 0;
		let cpc = 0;
		const numClicks = groups[id].stats.filter((seg) => seg.clicks !== 0).length;

		groups[id].stats.forEach((seg) => {
			clicks += seg.clicks;
			impressions += seg.impressions;
			cpc += seg.average_cpc;
		});

		return ({
			...groups[id],
			clicks,
			impressions,
			ctr: clicks / impressions,
			avg_cpc: cpc / numClicks,
		});
	});

	return stats;
};

module.exports = ctrReport;
