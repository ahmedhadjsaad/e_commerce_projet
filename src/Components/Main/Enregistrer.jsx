import React , {useState} from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
const Enregistrer = (props) => {
    const [Nom, setNom] = useState("")
    const [Prénom, setPrénom] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ErrEmail, setErrEmail] = useState("")
    const [ErrPassword, setErrPassword] = useState("")


    const Register = () => {
        Axios.post("http://localhost:4000/Users",{Email,Password,Nom,Prénom}).then(res=>props.history.push('/Login'))
    }

    const HandlerEmail = (e) => {
        let email = e.target.value
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmail(email)
            setErrEmail("")
        }
        else {
            setErrEmail("Adress not valid")
        }
    }
    const HandlerPassword = (e) => {
        let password = e.target.value
        if (password.length < 8) {
            setErrPassword("Password shoud be more than 8 char")
        }
        else {
            setPassword(password)
            setErrPassword("")
        }
    }



    return ( 
    <div className="Login-Enregistrer">
        <h1>Register</h1>
        <h5>Nom</h5>
        <input className="Email" type="text" placeholder="Nom" onChange={(e)=>setNom(e.target.value)} />
        <h5>Prénom</h5>
        <input className="Email" type="text" placeholder="Prénom" onChange={(e)=>setPrénom(e.target.value)} />
        <h5>Email address</h5>
        <input className="Email" type="text" placeholder="Email" onChange={HandlerEmail}  />
        <p> {ErrEmail} </p>
        <h5>Mot de passe</h5>
        <input className="MDP" type="text" placeholder="Mot de passe" onChange={HandlerPassword}  />
        <p> {ErrPassword} </p>
        <p onClick={Register} className="Se-conencter-Enregistrer">Confirmer</p>
    </div> );
}
 
export default withRouter (Enregistrer);