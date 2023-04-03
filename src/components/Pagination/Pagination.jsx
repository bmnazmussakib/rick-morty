import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination({ info, pageNumber, setPageNumber }) {



  // let next = () => {
  //   setPageNumber(prevPage => prevPage + 1)
  // }
  // let prev = () => {
  //   if (pageNumber > 1) {
  //     setPageNumber(prevPage => prevPage - 1)
  //   }
  // }

  return (
    <div className='d-flex justify-content-center mt-5'>

      <ReactPaginate
        className="pagination"

        nextLabel="Next"
        nextClassName="page-item"
        nextLinkClassName="page-link"

        previousLabel="Previous"
        previousClassName="page-item"
        previousLinkClassName="page-link"

        pageClassName="page-item"
        pageLinkClassName="page-link"

        activeClassName="active"

        onPageChange={(data)=>{setPageNumber(data.selected+1)}}

        pageCount={info?.pages}
      />







      {/* <button onClick={prev} className="btn-primary">Prev</button>
      <button onClick={next} className="btn-primary">Next</button> */}
    </div>
  )
}
