const { PrismaClient } = require(`@prisma/client`);
const { endOfYesterday, sub, startOfDay } = require(`date-fns`);

const prisma = new PrismaClient();

const generalProgress = require(`../../../utils/ads/queries/generalProgress`);

export default async (req, res) => {
	const { id } = req.body;
	let { dateRange } = req.body;

	if (!dateRange) {
		dateRange = {
			gte: startOfDay(sub(endOfYesterday(), { days: 14 })),
			lte: endOfYesterday()
		};
	}

	console.log({ prisma, item: prisma.accountPerformance });

	const data = await prisma.accountPerformance.findMany({
		where: {
			customer_id: parseInt(id),
			date: dateRange,
		}
	});

	res.status(200).json({
		...generalProgress(data),
	});
};
