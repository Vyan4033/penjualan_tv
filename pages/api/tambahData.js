//@ts-check

import { db } from "../../lib/db";

const handler = async(req, res) => {
    const {id, nama, harga} = req.body
    try{
        if(!id || !nama || !harga){
            return res
            .status(400)
            .json({message : "Input harus diisi semua"})
        }

        const results = await db.query(
            `INSERT INTO televisi (id, nama, harga) 
            VALUES (?,?,?)`,
            [id, nama, harga]
        )
        await db.end;
        
        return res.json(results)
    }
    catch (e) {
        res.status(500).json({message : e.message});
    }
}

export default handler