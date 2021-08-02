import Link from 'next/link';

const Sidebar = ({children}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Mahkota Televisi</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="/#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/DataTV" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Data TV</span> </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link href="/admin/TambahDt">
                                                <a className="nav-link px-0"> <span className="d-none d-sm-inline">Tambah Data TV</span></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/UpdateDt">
                                                <a className="nav-link px-0"> <span className="d-none d-sm-inline">Update TV</span></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="col py-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;