//@ts-check

import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Update = () => {
    const [_id, setId] = useState('');
    const [_nama, setNama] = useState('');
    const [_harga, setHarga] = useState('');

    const router = useRouter();
    const { id, nama, harga } = router.query;

    useEffect(() => {
        if (typeof id == 'string') {
            setId(id);
        }
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof harga == 'string') {
            setHarga(harga);
        }
    }, [id, nama, harga, id])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/updateData', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _id,
                    nama: _nama,
                    harga: _harga,
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

            alert("Update Berhasil")
            Router.push('/admin/DataTV')

        }
        catch (e) {
            throw Error(e.message)
        }
    }
    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h2 className="text-center">Update Data Televisi</h2>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "id"
                            type = "text"
                            placeholder = "ID"
                            value = {_id}
                            onChange = {(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "nama"
                            type = "text"
                            placeholder = "Nama Televisi"
                            value = {_nama}
                            onChange = {(e) => setNama(e.target.value)}
                        />
                        <label htmlFor="nama">Nama Televisi</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "harga"
                            type = "text"
                            placeholder = "Harga"
                            value = {_harga}
                            onChange = {(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update