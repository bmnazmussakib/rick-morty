import React from 'react'

export default function Cards({results}) {

  // const {info, results} = data
  // console.log('results: ', results)
  return (
    <>
    <div className="row">
    {
        results?.map(x => {
          return(
            <div className="col-4" key={x.id}>{x.name}</div>
          )
        })
      }
    </div>
      
    </>
  )
}
