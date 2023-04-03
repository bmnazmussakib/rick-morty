import React from 'react'

export default function Search({setSearch}) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" className='' name='search' onChange={handleChange}/>
        <button type='submit' className="btn btn-primary">Search</button>
      </form>
    </>
  )
}
