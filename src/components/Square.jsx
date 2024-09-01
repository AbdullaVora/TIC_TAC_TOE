import React from 'react'

const Square = ({props,onClick}) => {
  return (
    <>
     <div className="square" onClick={onClick}><span>{props}</span></div>   
    </>
  )
}

export default Square
