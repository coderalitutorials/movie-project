import React from 'react'

function Movie(props) {
  return (
    <div className='movie'>
          <img src={props.img} alt="not found" />
          <p>{props.Title}</p>
          <p>Year: {props.Year}</p>
    </div>
  )
}

export default Movie;