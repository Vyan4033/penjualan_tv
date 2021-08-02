//@ts-check

import Link from 'next/link'
import Router from 'next/router'
import { mutate } from 'swr';
import { useData } from '../../lib/swr-fetch'

const dataTV = () => {
    const {data, error} = useData();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }
    console.log(data)

    async function hapusTV(id){
        let res = await fetch(`/api/hapusData?id=${id}`, {method : 'DELETE'})
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapusData')
        alert('Data dihapus')
        Router.push('/admin/DataTV')
    }
    return(
        <div className="container w-75 mx-auto py-4">
            <h3 className="font-bold text-center">Data Televisi</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Nama Televisi</th>
                        <th className="text-center">Harga Televisi</th>
                        <th className="text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((tv, idx) => (
                            <tr key={idx}>
                                <td className="text-center">
                                    {tv.id}
                                </td>
                                <td className="text-center">
                                    {tv.nama}
                                </td>
                                <td className="text-center">
                                    {tv.harga}
                                </td>
                                <td className="text-center">
                                    <div className="d-flex justify-content-between">
                                        <Link href={`/admin/UpdateDt?
                                        &id=${tv.id}
                                        &nama=${tv.nama}
                                        &harga=${tv.harga}`}
                                        >
                                            <button className = "btn btn-primary">Edit</button>
                                        </Link>
                                        <button
                                            className = "btn btn-danger"
                                            value={tv.id}
                                            onClick={(e) => hapusTV(e.target.value)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center">
                <Link href="/admin/TambahDt">
                    <a className="btn btn-primary">Tambahkan</a>
                </Link>
            </div>
        </div>
    )
}

export default dataTV