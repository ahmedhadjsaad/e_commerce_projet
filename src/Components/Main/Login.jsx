import Axios from 'axios';
import React, { useState , useEffect } from 'react'
import { withRouter } from 'react-router-dom';
const Login = (props) => {
    const [Users, setUsers] = useState([])
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ErrMessage, setErrMessage] = useState("")
    useEffect(() => {
        Axios.get("http://localhost:4000/All_Users").then(res=>setUsers(res.data))
    },Users)
    const Login = () => {
        let x= Users.findIndex(el=>el.Email===Email&&el.Password===Password)
        x === -1 ? setErrMessage("Failed") : props.history.push('/')
    }

    return ( 
    <div className="Login">
        <div className="Login-Enregistrer">
            <h1>Login</h1>
            <h5>Email address</h5>
            <input className="Email" type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <h5>Mot de passe</h5>
            <input className="MDP" type="text" placeholder="Mot de passe" onChange={(e)=>setPassword(e.target.value)} />
            <p className="mot-de-passe-oublié">Mot de passe oublié ?</p>
            <p>{ErrMessage}</p>
            <p onClick={Login} className="Se-conencter-Enregistrer">Se Connecter</p>
       </div>
       <div className="Enregistrer-1-fois">
            <h4>Je commande pour la première fois</h4>
            <p onClick={()=>props.history.push("/Enregistrer")} className="Se-conencter-Enregistrer">Enregistrer</p>
       </div>

    </div> );
}
 
export default withRouter (Login);