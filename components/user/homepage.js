import Link from 'next/link'
export default function homePage(){
    return(
        <div>
            <header className="blog-header py-3 bg-info">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-15 text-center pt-1">
                        <Link href="/admin/DataTV">
                            <h2 className="blog-header-logo text-dark">Mahkota TV</h2>
                        </Link>
                    </div>
                </div>
            </header>
            <div>
            <nav className="nav d-flex justify-content-center">
                    <Link href="/"><a className="p-2 link-secondary">Home</a></Link>
                    <Link href="/user/DataUser"><a className="p-2 link-secondary">Data Televisi</a></Link>
                    <Link href="/Pemesanan"><a className="p-2 link-secondary">Pemesanan</a></Link>
                </nav>
            </div>
        </div>
    )
}