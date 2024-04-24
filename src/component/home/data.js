import React from 'react'

const ResultData = (props) => {
    const {data}=props
    const {title ,description,images}=data
  return (
    <div className='result-data-container'>
      <img  src={images[0]} alt={title}/>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  )
}

export default ResultData
