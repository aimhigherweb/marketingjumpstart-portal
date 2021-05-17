const { PrismaClient } = require(`@prisma/client`);

const prisma = new PrismaClient();

export default async (req, res) => {
	const { id } = req.query;
	const data = await prisma.account.findFirst({
		where: {
			id: parseInt(id)
		}
	});

	res.status(200).json(data);
};
