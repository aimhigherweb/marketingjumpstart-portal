const adGroupPerformance = require(`./adGroupPerformance`);

const adGroup = (data) => {
	console.log();

	return ({
		adGroupPerformance: adGroupPerformance(data)
	});
};

module.exports = adGroup;
