//@ts-check

import { db } from "../../lib/db"

const handler = async (req, res) => {
    const {id, nama, harga} = req.body
    try{
        if(!id || !nama || !harga){
            return res
            .status(400)
            .json({message : 'Isian tidak boleh kosong'})
        }
        const results = await db.query(
            `UPDATE televisi set id = ?, nama = ?, harga = ? WHERE id = ?`,
            [id, nama, harga, id]
        )
        
        return res.json(results)
    } 
    catch (e) {
        res.status(500).json({messaage : e.message})
    }
}

export default handler;