export function Function1comp (){
    return <div>
        <p>type 1 functional component</p>
    </div>
}

export const Function2comp = () =>{
    return <div>
        type 2 functiona component
    </div>
}

export const Function3comp = function(sharath){
    console.log(sharath)
    return <div>
        <p>type 3 functional component</p>
        <p>{sharath.name} {sharath.last}</p>
    </div>
}