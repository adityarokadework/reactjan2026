import React from 'react'
import CounterDisplay from './CounterDisplay';
import CounterButtons from '../components/CounterButtons';
import { useState } from 'react';

const CounterPage = () => {

   const [count, setCount] = useState(10);
   const [name , setName] = useState("ESTPL")

  return (
    <div>
      <CounterDisplay count={count} name={name} />
      <CounterButtons setCount={setCount} />
    </div>
  )
}

export default CounterPage