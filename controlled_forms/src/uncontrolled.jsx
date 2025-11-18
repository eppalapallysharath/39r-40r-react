import { useRef, useState } from "react"

export const DemoUncontrolled = () =>{
    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef()
    const nameError = useRef();
    const ageError = useRef();

    const [data, setData] = useState({
        name:"",
        email:"",
        age:""
    })

    const submit = (e) =>{
        e.preventDefault();
        let checkNameError = false;
        let checkAgeError = false; 
        if(nameRef.current.value.length < 1){
            nameError.current.innerText="please enter name"
            nameError.current.style.color ="red"
            checkNameError = true
        }else{
            if(nameRef.current.value.length <6){
            nameError.current.innerText="minimum 6 characters present in name"
            nameError.current.style.color ="red"
            checkNameError = true
            }else{
                const name  = nameRef.current.value
                for(const v of name){
                    const charcode = v.charCodeAt(0);
                    const  check  = charcode >= 97 && charcode <=122
                    if(!check ){
                        nameError.current.innerText="enter only small letter only"
                        nameError.current.style.color ="red"
                        checkNameError = true
                    }else{
                        nameError.current.innerText =""
                        checkNameError = false
                    }
                }
            }
        }

        if(ageRef.current.value.length==0){
            ageError.current.innerText = "please enter age"
            ageError.current.style.color = "red"
            checkAgeError = true

        }else{
            if(ageRef.current.value >= 0 && ageRef.current.value <= 100 ){
                ageError.current.innerText = ""
                checkAgeError = false
            }else{
                ageError.current.innerText = "age present between 0 to 100 only"
                ageError.current.style.color = "red"
                checkAgeError = true
            } 
        }

        

        if(checkNameError == true && checkAgeError == true){
            setData({})
            console.log("error")
        }else {
            console.log("no error")
            setData({name:nameRef.current.value, age:ageRef.current.value})
        }

    }

    return <form onSubmit={submit}>
        <h4>Registration form</h4>
        <p>Full name</p>
        <input type="text"  name="fullname" ref={nameRef }/>
        <p ref={nameError}></p>
        <p>email</p>
        <input type="email" name="email" ref={emailRef}/>
        <p>age</p>
        <input type="number" name="age" ref={ageRef}/>
        <p ref={ageError}></p>
        <div>
            <button>submit</button>
        </div>
        <div>
            <h1>name {data.name}</h1>
            <h1>age {data.age}</h1>
        </div>
    </form>
}