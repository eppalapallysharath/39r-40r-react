import { useEffect, useState } from "react";
import axios from "axios";

export function UserSearch() {
    const [data, setData] = useState([]) 
    const [searchInput, setSearchInput] = useState("")
    const [search, setSearch] = useState("")
    const [searcData, setSearchData] = useState({})


    function fetchAllUsers(){
        axios.get("https://dummyjson.com/users")
        .then(res=>setData(res.data.users))
        .catch(err => console.log(err))
    }

    function fetchSearchUser(){
        axios.get(`https://dummyjson.com/users/${search}`)
        .then(res =>setSearchData(res.data)).catch(err => console.log(err))
    }

  useEffect(() => {
    if(search.length > 0){
        console.log("search value")
        fetchSearchUser()
    }else{
        console.log("all data")
        fetchAllUsers()
    }
  }, [search]);
  
  function clicksearch (){
    setSearch(searchInput)
  }

  

  return (
    <div>
      <p>Search user</p>
      <input type="number" name="search-input-box" onChange={(e)=>setSearchInput(e.target.value)} />
      <button onClick={clicksearch}>search</button>
    
        {search.length > 0 ? <div>
             <p>ID {searcData.id}</p>
            <p>USERNAME {searcData.username} </p>
            <p>Age {searcData.age} </p>
            <p>Email  {searcData.email}</p>
        </div> : data.map((user)=><div key={user.id} style={{ border:"1px solid green" }}>
            <p>ID {user.id}</p>
            <p>USERNAME {user.username}</p>
            <p>Age {user.age}</p>
            <p>Email {user.email}</p>
        </div>) }

       
    </div>
  );
}

