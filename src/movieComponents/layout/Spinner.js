import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '300px', margin: 'auto', display: 'block' ,justifyContent:"center",alignContent:"center"}}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner