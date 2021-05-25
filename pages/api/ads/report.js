const { PrismaClient } = require(`@prisma/client`);
const { endOfYesterday, sub, startOfDay } = require(`date-fns`);

const prisma = new PrismaClient();

const generalProgress = require(`../../../utils/ads/queries/generalProgress`);
const keywordPerformance = require(`../../../utils/ads/queries/keywordPerformance`);
const adGroupPerformance = require(`../../../utils/ads/queries/adGroup`);
const adPerformance = require(`../../../utils/ads/queries/adPerformance`);

export default async (req, res) => {
	const { id } = req.query;
	let { dateRange } = req.body;

	if (!dateRange) {
		dateRange = {
			gte: startOfDay(sub(endOfYesterday(), { days: 14 })),
			lte: endOfYesterday()
		};
	}

	const filters = {
		customer_id: parseInt(id),
		date: dateRange,
	};

	const accountPerformance = await prisma.accountPerformance.findMany({
		where: {
			...filters
		}
	});

	const keywords = await prisma.keywordStats.findMany({
		where: {
			...filters
		}
	});

	const adGroup = await prisma.adGroupPerformance.findMany({
		where: {
			...filters
		}
	});

	const campaigns = await prisma.adPerformance.findMany({
		where: {
			...filters
		}
	});

	res.status(200).json({
		generalProgress: generalProgress(accountPerformance),
		...keywordPerformance(keywords),
		...adGroupPerformance(adGroup),
		...adPerformance(campaigns)
	});
};
