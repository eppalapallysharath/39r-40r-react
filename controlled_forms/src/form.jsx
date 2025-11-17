import { useState } from "react";

export function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorAge, setErrorAge] = useState("");
    const [data, setData] = useState({
        name:"",
        age:"",
        email:""
    })
 
  const submit = (e) => {
    e.preventDefault();
    if (fullName.length === 0) {
      setErrorFullName("please enter fullname");
    }
    
    if (email.length === 0) {
      setErrorEmail("please enter email");
    }
    if (age.length === 0) {
      setErrorAge("please enter age correctly");
    }

    if(fullName.length > 0 && age.length > 0 && email.length ){
        setData({
            name: fullName,
            email: email,
            age:age
        })
    }
  };

  function handleAge(e){
    
    if(e.target.value >0 && e.target.value <101){
        setAge(e.target.value)
        setErrorAge("")
    }else{
        setErrorAge("enter age between 0 to 100")
    }
  }

  const handleFullName = (e) =>{
    // if(e.target.value === e.target.value.toLowerCase() ){
    //     setFullName(e.target.value)
    //     setErrorFullName("")
    // }else{
    //     setErrorFullName("please enter small letters a-z")
    // }
    const str = e.target.value;
    console.log(str)
    for(let i = 0; i <=str.length; i++ ){
        console.log(str[i])
        console.log(str.charCodeAt(i)) 
        if(str.charCodeAt(i)>= 97 && str.charCodeAt(i) <= 122){
            setFullName(e.target.value)
        }else{
            setErrorFullName("enter only small letters only")
        }
    }
  }

  return (
    <form onSubmit={submit}>
      <fieldset>
        <legend>Registration form</legend>
        <p>Full name</p>
        <input
          type="text"
          name="full name"
          onChange={handleFullName} 
        //   value={fullName}
        />
        <p style={{ color: "red" }}>{errorFullName}</p>
        <p>Email</p>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{errorEmail}</p>
        <p>Age</p>
        <input
          type="number"
          name="age"
          onChange={handleAge}
          value={age}
        />
        <p style={{ color: "red" }}>{errorAge}</p>
        <div>
          <button>submit form</button>
        </div>
      </fieldset>
      <div>
          <h1>fullname{data.name}</h1>
          <h1>age{data.age}</h1>
          <h1>email{data.email}</h1>
        </div>
    </form>
  );
}
