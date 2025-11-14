import { useState, useRef, useEffect } from "react"

export function Demo_useRef (){
    const [count, setCount] = useState(0)
    const refCount = useRef(0)
    const h2Ref = useRef() 
    const pRef = useRef()
    console.log("h2 ref",h2Ref)
    const inputRef = useRef()

    function handleRefInc(){
        console.log(refCount.current)
        refCount.current = refCount.current+1
        console.log("ref inc")
        console.log(refCount.current)

        // pRef.current.src="https://img.freepik.com/free-psd/white-isolated-car_23-2151852918.jpg?semt=ais_hybrid&w=740&q=80"
        inputRef.current.focus()
    } 

    function handleRefDec(){
        console.log(refCount.current)
        refCount.current = refCount.current-1
        console.log("ref dec")
        console.log(refCount.current)
    } 

    useEffect(()=>{
        setTimeout(()=>{
            inputRef.current.focus()
        },2000)
    },[])



    // useEffect(()=>{
    //     setInterval(()=>{
    //         h2Ref.current.innerText ="hi how are you?"
    //         h2Ref.current.style.color="green"
    //         h2Ref.current.style.background="black"
    //         const spantag =  document.createElement("span")
    //         spantag.innerText="wow wonderful"
    //         spantag.style.color = "red"
    //         h2Ref.current.appendChild(spantag)
    //     },1000)
    // },[])
    
    const handlesubmit = () =>{
        console.log("submit", inputRef.current.value)
    }


    
    return <div>
        <h1>Example useRef hook</h1>
        <p>count {count}</p>
        <button onClick={()=>setCount(count+1)}>Inc +</button>
        <button onClick={()=>setCount(count-1)}>Dec -</button>
        <br/>
        <p>ref count {refCount.current}</p>
        <button onClick={handleRefInc}>+</button>
        <button onClick={handleRefDec}>-</button>
        {console.log("render")}
        <h5 ref={h2Ref}>hello hi</h5>
        <img src="" alt="image" ref={pRef}/>
        <input  ref={inputRef}  />
        <button onClick={handlesubmit}>submit</button>
    </div>
}