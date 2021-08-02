//@ts-check

import Link from "next/link"

const DataTV = ({data}) => {
    return(
        <div className="container">
            <h3 className="font-bold text-center">Data Paket</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Nama Televisi</th>
                        <th className="text-center">Harga</th>
                        <th className="text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((tv, idx) => (
                            <tr key={idx}>
                                <td>
                                    {tv.id}
                                </td>
                                <td>
                                    {tv.nama}
                                </td>
                                <td className="text-center">
                                    {tv.harga}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <Link href="/Pemesanan">
                                            <button className = "btn btn-primary">Pesan</button>
                                        </Link>
                                     </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTV