import React from 'react'

export default function selectData({ setId, total }) {

    // console.log(total)

    let count = [...Array(total).keys()]

    return (
        <>
            <h6>Pick Episode</h6>
            <div className="input-group mb-3">
                <select onChange={(e)=>{setId(e.target.value)}} className="form-select" id="inputGroupSelect01">
                    <option value='1'>Choose...</option>
                    {
                        count.map(x => {
                            return <option  value={x+1}>Episode {x+1}</option>
                        })
                    }
                    
                </select>
            </div>
        </>
    )
}
