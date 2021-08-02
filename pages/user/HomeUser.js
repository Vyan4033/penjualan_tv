import Jumbotron from "../../components/props/Jumbotron";
import Layout from "../../components/user/Layout";

const UserHome = () => {
    let jumbo = {judul : "Mahkota Televisi",
                 isi : "Disini kami memiliki Televisi idaman yang nyaman dan aman untuk keluarga. Merupakan keinginan setiap orang. Oleh karena itu kami akan mewujudkan impian anda. Tersedia berbagai tipe dan harga yang bersahabat."
                }
    return(
        <div>
            <Layout>
                <Jumbotron judul = {jumbo.judul} isi = {jumbo.isi}/>
            </Layout>
        </div>
    )
}

export default UserHome