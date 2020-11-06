import React , {useState} from 'react'
import { withRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Header = (props) => {
    const [Open, setOpen] = useState(false)
    const [OpenCat, setOpenCat] = useState(false)

    return (
    <div onClick={()=> {if (Open === true) {
        setOpen(false)
    }}} className="Header">
        <div className="Header-Container">
            <div className="Home">
                <p onClick={()=>props.history.push("/")}><i onClick={()=>props.history.push("/")} class="fas fa-star"></i>Vendez sur SANTÉ FOR LIFE </p> 
            </div>
            <div className="Search-Bar">
                <div className="Catégories-container">
                <div className="Détails-Catégories">
                    <p onClick={()=>setOpenCat(!OpenCat)}><i onClick={()=>setOpenCat(!OpenCat)} class="fas fa-list"></i>Catégories</p>
                </div>
                <div>
                    {/* {OpenCat && (
                        <div className="Drop-Menu-Cat">
                            <p className="Materiels-Médicals">  Materiels Médicals</p>
                            <p className="Bébé-Maman">  Bébé & Maman</p>
                            <p className="Santé-Bien-ètre"> Santé & Bien ètre</p>
                        </div>
                    )} */}
                </div>
                </div>
                <div className="search-icon">
                    <input onChange={(e)=>props.Search(e.target.value)} className="input-search" type="text" placeholder="Chercher un produit ..."/>
                    <i onClick={()=>props.history.push("/SearchResult")} class="fas fa-search"></i>
                </div>
                <div className="Connecter-container">
                <div  className="Connecter">
                    <p onClick={()=>setOpen(!Open)}> <i onClick={()=>setOpen(!Open)} class="fas fa-user"></i> Mon compte <i onClick={()=>setOpen(!Open)} class="fas fa-caret-down"></i></p>
                </div>
                <div>
                    {Open && (
                        <div  className="Drop-Menu">
                            <h4 onClick={()=>props.history.push("/Login")} className="Se-Connecter">SE CONNECTER</h4>
                            <div className="border"></div>
                            <h4 onClick={()=>props.history.push("/Enregistrer")} className="Creer-compte">CREER UN COMPTE</h4>
                        </div>
                    )}
                </div>
                </div>
                <div className="Appel">
                    <p> <i class="fas fa-mobile-alt"></i> Besoin d'un conseil? 58 429 515</p>
                </div>
                <div className="Panier-shopping">
                    <i onClick={()=>props.history.push("/Panier")} class="fas fa-shopping-cart" ></i>
                    <div className="valeur-shopping">
                        <p> {props.Count.length} </p>
                        {/* <p> {props.Count.length} </p> */}
                    </div>
                    <div className="Total-item">
                        <p onClick={()=>props.history.push("/Panier")}> Panier </p>
                     </div>   
                </div> 
            </div>
        </div>
    </div> 
    );
}
 
export default withRouter (Header);