import React, { useState, useMemo } from 'react'

export const ExampleUsememo = () => {
    const [name, setName] = useState()
    const [number, setNumber] = useState(0)
    console.log("main")

    function findSquare (){
        console.log("check find square")
        let sum = 0;
        for(let i=0; i<10000000; i++){
            sum+=i
        }
        return (sum*sum) * number
    } 

    const squareValue = useMemo(()=>{ return findSquare()}, [number] ) 
    // const squareValue = findSquare() 

  return (
    <div>
        <h4>Example useMemo</h4>
        <input type='text' name='name' onChange={(e)=>setName(e.target.value)} value={name}/>
        <p>{name}</p>
        <input type='number' name="number" onChange={(e)=>setNumber(e.target.value)} value={number}/>
        <p>square root value {squareValue}</p>
    </div>
  )
}
