import React, {useState,useContext} from "react";
import {Context} from "../store/appContext.js";
import {useNavigate} from "react-router-dom";
import "../../styles/home.css";


const Login = () => {
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const{store,actions}=useContext(Context)
    const navigate = useNavigate();

  
    async function handleLogin(e){
        e.preventDefault();
        
        let logged = await actions.login(email,password);
        if (logged){
            navigate("/home")
        }
        else{
          alert("El email o la contraseña son incorrectas, revisa ambos campos")
          navigate("/")
        }
    }

	return (
      <div className="formulario">  
        <form className="w-50 mx-auto" onSubmit={handleLogin}>
        <div className="mb-3 text-light">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div className="mb-3 text-light">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}  id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>  

    )
};

export default Login;