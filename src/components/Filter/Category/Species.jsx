import React from 'react'
import FilterBtn from '../FilterBtn'

export default function Species({setSpecies, setPageNumber}) {

  const species = [
    'human',
    'alien',
    'humanoid',
    'poopybutthole',
    'mythological',
    'unknown',
    'animal',
    'disease',
    'robot',
    'cronenberg',
    'planet'
  ]

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Species
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {
            species.map((item, index) => (
              <FilterBtn key={index} name="species" item={item} index={index} task={setSpecies} setPageNumber={setPageNumber}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
