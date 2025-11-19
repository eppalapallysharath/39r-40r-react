import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

    const login = (e) =>{
        e.preventDefault()
        if(email === "tom@gmail.com" && password === "tom123"){
            alert("login successfully")
            navigate("/dashboard")
        }else{
            alert("login failed")
        }
    }

  return (
    <div>
      <p>this login page</p>
      <Link to="/homepage">
        {" "}
        <h1>Home</h1>
      </Link>
      <form>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>login</button>
      </form>
    </div>
  );
};
