import React, { useEffect, useState } from 'react'
import Species from './Category/Species'
import Status from './Category/Status'
import Gender from './Category/Gender'
import axios from 'axios'

export default function Filter({ setStatus, setGender, setSpecies, setPageNumber }) {

  const clear = () => {
    setStatus('')
    setGender('')
    setSpecies('')
    setPageNumber('')
  }

  return (
    <div className='col-3'>
      <h4 className='text-center'>Filter</h4>
      <p onClick={clear} style={{cursor: 'pointer'}} className='text-center text-primary text-decoration-underline' >CLear Filter</p>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}
