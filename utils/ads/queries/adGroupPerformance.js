const adGroupPerformance = (data) => {
	const groups = {};

	data.forEach((seg) => {
		const id = seg.ad_group_id;

		if (!groups[id]) {
			groups[id] = {
				name: seg.ad_group_name,
				stats: [
					{
						clicks: seg.clicks,
						impressions: seg.impressions
					}
				]
			};
		} else {
			const { stats } = groups[id];

			groups[id].stats = [
				...stats,
				{
					clicks: seg.clicks,
					impressions: seg.impressions
				}
			];
		}
	});

	const stats = Object.keys(groups).map((id) => {
		let clicks = 0;
		let impressions = 0;

		groups[id].stats.forEach((seg) => {
			clicks += seg.clicks;
			impressions += seg.impressions;
		});

		return ({
			id,
			name: groups[id].name,
			clicks,
			impressions,
		});
	});

	return stats;
};

module.exports = adGroupPerformance;
