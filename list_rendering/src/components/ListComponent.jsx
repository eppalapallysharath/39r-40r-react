const ListComp = () =>{
    const dataList = ["sharath", "ram", "tom", "jerry"]
    const data = [{name:"tony", classes: "9th"},{ name:"captain",classes:"7th"},{ name:"hulk",classes:"8th"}]
    return <div>
      {dataList.map((element, index)=> <p key={index}>name is {element}</p>)}
      {data.map((element, index)=><div key={index}>
        <p>student name is {element.name}</p>
        <p>class {element.classes}</p>
      </div>)}
    </div>
}

export default ListComp;