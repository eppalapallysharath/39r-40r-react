import {useNavigate} from "react-router-dom"
export const Dashboard = () => {
    const navigate = useNavigate()
    return <div>
        <p>welcome to dashboard</p>
        <button onClick={()=>navigate("/")}>logout</button>
    </div>
}