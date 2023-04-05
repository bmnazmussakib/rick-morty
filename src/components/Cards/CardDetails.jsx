import React from 'react'
import { useParams } from 'react-router-dom'

export default function CardDetails() {

    const {id} = useParams();

    let a = useParams()
    console.log(a)

  return (
    <div>
        <h1>CardDetails - {id}</h1>
    </div>
  )
}
