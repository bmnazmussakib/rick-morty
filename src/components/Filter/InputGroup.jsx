import React from 'react'

export default function InputGroup({ count }) {

    
    for (let i = 0; i < count?.length; i++) {
        const element = count[i];
        console.log(element)
    }


    return (
        <>
            <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    {

                    }
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </>
    )
}
