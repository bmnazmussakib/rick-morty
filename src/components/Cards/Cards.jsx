import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({ page, results }) {

  // const {info, results} = data
  // console.log('results: ', results)
  return (
    <>
      <div className="row">
        {
          results?.map(x => {
            return (
              <>
                <Link to={`${page}${x.id}`}>
                  <div className="col-4" key={x.id}>{x.name}</div>
                </Link>

              </>
            )
          })
        }
      </div>

    </>
  )
}
