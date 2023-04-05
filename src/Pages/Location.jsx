import React, { useState } from 'react';
import { useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import SelectData from '../components/Filter/SelectData';


export default function Episodes() {

    const [id, setId] = useState(1)
    const [info, setinfo] = useState([])
    const [results, setResults] = useState([])
    const { dimension, name, type, residents } = info;

    console.log(info)

    let api = `https://rickandmortyapi.com/api/location/${id}`

    // const getData = async () => {
    //     await axios.get(api).then(res => setinfo(res.data))

    //     let a = await Promise.all(
    //         getData.characters?.map(x => {
    //             return fetch(x).then(res => res.json())
    //         })
    //     )
    // }



    useEffect(() => {

        (async function () {
            let data = await fetch(api).then(res => res.json());
            setinfo(data);

            let a = await Promise.all(
                data.residents.map(x => {
                    return fetch(x).then(res => res.json())
                })
            )
            setResults(a)

        })()


    }, [api])




    return (
        <div>
            <h3>Dimention : {dimension}</h3>
            <h6>Type: {type}</h6>
            <div className="row">
                <div className="col-3">
                    <SelectData setId={setId} total={126} />
                </div>
                <div className="col-8">
                    <Cards page='/location/' results={results}/>
                </div>
            </div>
        </div>
    )
}
