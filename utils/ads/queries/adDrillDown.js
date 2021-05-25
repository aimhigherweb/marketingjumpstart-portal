const adDrillDown = (data) => {
	const groups = {};

	data.forEach((seg) => {
		const id = seg.ad_group_id;
		const headlines = seg.responsive_search_ad_headlines;
		const descriptions = seg.responsive_search_ad_descriptions;

		if (!groups[id]) {
			groups[id] = {
				name: seg.ad_group_name,
				stats: [
					{
						clicks: seg.clicks,
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

		groups[id].stats.forEach((seg) => {
			clicks += seg.clicks;
		});

		return ({
			id,
			name: groups[id].name,
			clicks,
			ads: groups[id].ads
		});
	});

	return stats;
};

module.exports = adDrillDown;
