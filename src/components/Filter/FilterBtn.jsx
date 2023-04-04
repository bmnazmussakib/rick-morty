import React from 'react'

export default function FilterBtn({ index, item, name, task, setPageNumber }) {

    return (
        <div>
            <style jsx="true">
                {`
                    .x:checked + label{
                        background-color: #0d6efd;
                        color: #fff
                    }

                    input[type=radio] {
                        display: none;
                    }
                `}
            </style>
            <div className="form-check">
                <input onClick={() => { setPageNumber(1); task(item); }} className="form-check-input x" type="radio" name={name} id={`${name}-${index}`} />
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{item}</label>
            </div>
        </div>
    )
}
