//@ts-check

import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url);
    return res.json()
}

export const useData = (tv) => {
    //url
    const url = "http://localhost:3000/api/dataTelevisi"
    //data error
    const {data, error} = useSWR(url, fetcher, {initialData : tv, refreshInterval : 1000})

    return {data, error}
}