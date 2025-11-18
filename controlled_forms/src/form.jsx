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
    const {value} = e.target;
    for(let v of value ){
      const code = v.charCodeAt(0)
      const char = code >= 97 && code <= 122 
      if(!char){
        setErrorFullName("enter only small letters")
        return;
      }
    }

    setFullName(value)
    setErrorFullName("")
  }


  const handleEmail = (e) =>{
     const {value} = e.target
     setEmail(e.target.value)
     const check = value.split("@")

    
     if( check[check.length -1] == "gmail.com"){
      console.log("value")
      setErrorEmail("")
    }else{
       setErrorEmail("only gmail accepted here @gmail.com")
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
          value={fullName}
        />
        <p style={{ color: "red" }}>{errorFullName}</p>
        <p>Email</p>
        <input
          type="email"
          name="email"
          onChange={(e) =>handleEmail(e) }
          // value={email}
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
