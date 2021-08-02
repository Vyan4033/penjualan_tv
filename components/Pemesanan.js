import 'bootstrap/dist/css/bootstrap.min.css'
export default function pemesanan(){
    return(
        <div>
    
            <div className="text-center">
                <h2>Form Pemesanan</h2>
        </div>
        <div className="mb-3 container">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Alamat Email"/>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Kata Sandi"/>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Alamat"/>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Pilihan TV</option>
                    <option value="Samsung LED Curved TV 49 Inch">Samsung LED Curved TV 49 Inch</option>
                    <option value="Sony LED TV 32 Inch">Sony LED TV 32 Inch</option>
                    <option value="Sony LED TV 48 Inch">Sony LED TV 48 Inch</option>
                    <option value="LG LED TV 55 Inch">LG LED TV 55 Inch</option>
                    <option value="Panasonic LED TV 32 Inch">Panasonic LED TV 32 Inch</option>
                    <option value="Sharp LED TV 32 Inch">Sharp LED TV 32 Inch</option>
                </select>
            </div>
            <div className="container">
                <h4>Metode Pembayaran</h4>
                <select className="form-select" aria-label="Default select example">
                    <option selected>--Pilih Metode Pembayaran--</option>
                    <option value="Indomaret">Indomaret</option>
                    <option value="Alfamart">Alfamart</option>
                    <option value="Gopay">Gopay</option>
                </select>
            </div>
            <div className="mb-3 container text-center">
                <button type="button" className="btn btn-primary">Bayar</button>
            </div>
        </div>
    )
}