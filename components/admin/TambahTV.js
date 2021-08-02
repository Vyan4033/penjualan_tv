//@ts-check

import Link from 'next/link'
import { useState } from 'react';

const Tambah = () => {
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/tambahData",{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    id,
                    nama,
                    harga,
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        }
        catch (e) {
            throw Error(e.message)
        }
    }
    return(
        <div>
           <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h2 className="text-center">Tambah Data Televisi</h2>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "id"
                            type = "text"
                            placeholder = "ID"
                            value = {id}
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
                            value = {nama}
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
                            value = {harga}
                            onChange = {(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Tambah
                        </button>
                        <Link href="/admin/DataTV">
                            <a className="btn btn-primary">Kembali</a>
                        </Link>
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default Tambah