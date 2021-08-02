//@ts-check

import DataTV from "../../components/user/DataTV"
import Layout from "../../components/user/Layout"
import { useData } from "../../lib/swr-fetch"

const User = () => {
    const {data, error} = useData()
    if(error) {
        return <div>Error Loading</div>
    }
    if(!data) {
        return <div>Loading</div>
    }

    console.log(data)
    
    return(
        <div>
            <Layout>
                <DataTV data={data}/>
            </Layout>
        </div>
    )
}

export default User