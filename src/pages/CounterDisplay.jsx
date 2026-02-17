import React from 'react'

const CounterDisplay = ({ count , name }) => {
  return (
    <div>
      <h1>{name}</h1>
      {count}
    </div>
  )
}

export default CounterDisplay