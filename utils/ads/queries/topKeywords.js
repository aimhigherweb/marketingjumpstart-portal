const topKeywords = (data) => {
	const keywords = {};

	data.forEach((seg) => {
		const keyword = seg.keyword_text_matching_query;
		if (!keywords[keyword]) {
			keywords[keyword] = [
				{
					clicks: seg.clicks,
					impressions: seg.impressions,
				}
			];
		} else {
			const details = keywords[keyword];
			keywords[keyword] = [
				...details,
				{
					clicks: seg.clicks,
					impressions: seg.impressions
				}
			];
		}
	});

	const stats = Object.keys(keywords).map((keyword) => {
		let clicks = 0;
		let impressions = 0;

		keywords[keyword].forEach((seg) => {
			clicks += seg.clicks;
			impressions += seg.impressions;
		});

		return ({
			keyword,
			clicks,
			impressions,
			ctr: clicks / impressions
		});
	});

	return stats.sort((a, b) => a.ctr - b.ctr);
};

module.exports = topKeywords;
