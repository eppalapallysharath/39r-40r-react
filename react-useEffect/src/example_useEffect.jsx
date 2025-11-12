import { useState, useEffect } from "react"
import axios from "axios"

export const Demo_UseEffect = () =>{
    const [count, setCount] = useState(0)  
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const [selectCategory, setSelectCategory ] = useState("All")
     // useEffect(()=>{ 
    //     console.log("useEffect")
    //     setCount(count+3)
    // }, [count])//component did update
    
    // useEffect(()=>{ 
    //     console.log("useEffect")
    //     setCount(count+3)
    // }, [])//component did mount
    // useEffect(()=>{
    //     const root =  document.getElementById("root")
    //     const h1 = document.createElement("h1")
    //     h1.innerText = "hello world"
    //     h1.style.color = "red"
    //     root.appendChild(h1)

    //     const title = document.getElementsByTagName("title")
    //     title[0].innerText = "sharath"
    // } ,[])

    function fetchProducts(){
         axios.get("https://fakestoreapi.com/products")
        .then(res => {
            for(const value of res.data){
                if(!category.includes(value.category)){
                   
                    category.push(value.category)
                }
            }
            setData(res.data)
            setCategory(category)
        })
        .catch(err =>  console.log(err))
    }

    function categoryFetch() {
        axios.get(`https://fakestoreapi.com/products/category/${selectCategory}`)
        .then(res=> setData(res.data))
        .catch(err=> console.log(err))
    }

    useEffect(()=>{
        console.log("useEffect")
        if(selectCategory === "All"){
            fetchProducts()
        }else{
            categoryFetch()
        }
        // setInterval(()=>{console.log("hi helloo")},5000)
        console.log("useEffect end")
    }, [selectCategory])
    
    function selectDropdown(e) {
        setSelectCategory(e.target.value)
    }
    
    return <div>
        <p>Demo useEffect</p>
        <p>Count {count}</p>
        <button onClick={()=>setCount(count + 1)}>increment</button>

        <select onChange={selectDropdown}>
            <option value="All">All</option>
            {category.map(v => <option value={v} key={v}>{v}</option>)}
        </select>

        {/* {
            data.length > 0 ? data.map((itm)=> <div key={itm.id} style={{ border:"1px solid blue" }}>
                <p>{itm.title}</p> <p>category{itm.category}</p>
            </div>) : <p>Loading...</p>
        } */}
        {
            data.map((itm)=> <div key={itm.id} style={{ border:"1px solid blue" }}>
                <p>{itm.title}</p> <p>category{itm.category}</p>
            </div>)
        }

        <p>this demo of useEffect</p>
    </div>
}