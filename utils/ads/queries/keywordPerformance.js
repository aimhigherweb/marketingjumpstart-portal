const topKeywords = require(`./topKeywords`);

const keywordPerformance = (data) => {
	console.log;

	return ({
		topKeywords: topKeywords(data)
	});
};

module.exports = keywordPerformance;
