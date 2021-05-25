const adDrillDown = require(`./adDrillDown`);
const ctrReport = require(`./ctrReport`);

const adPerformance = (data) => ({
	adDrillDown: adDrillDown(data),
	ctrReport: ctrReport(data)
});

module.exports = adPerformance;
