import type { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
	res.json({message: 'Hello world'})
}

export default handler
