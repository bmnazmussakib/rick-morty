import React, { useState } from 'react';
import InputGroup from '../components/Filter/InputGroup';
import { useEffect } from 'react';
import axios from 'axios';

export default function Episodes() {

    const [id, setId] = useState(50)
    const [info, setinfo] = useState('')
    const [count, setCount] = useState()
    const [results, setResults] = useState('')


    let episode_api = `https://rickandmortyapi.com/api/episode`
    let api = `https://rickandmortyapi.com/api/episode/${id}`

    useEffect(() => {
        axios.get(api)
            .then(function (response) {
                let data = response.data
                setinfo(data);

                data.characters.map((item) => {
                    setResults(item)
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [api])

    useEffect(()=>{
        axios.get(episode_api)
            .then(function (response) {
                let data = response.data
                setCount(data.info.count);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])




    return (
        <div>
            <h1>Episodes</h1>
            <InputGroup count={count} />
        </div>
    )
}
