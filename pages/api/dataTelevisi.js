//@ts-check

import { db } from '../../lib/db'

const handler = async(_, res) => {
    try{
        const results = await db.query(
            `SELECT * FROM televisi
            ORDER BY id ASC`
        );
        await db.end

        return res.json(results)
    }
    catch (e) {
        res.statu4s(500).json({message : e.message})
    }
}

export default handler;