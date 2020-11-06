import React , {useState,useEffect} from 'react'
import Vide from '../../empty.png'
const Panier = (props) => {
    const [Frais, setFrais] = useState(0)
    useEffect(() => {
        
       Total()
    }, [])
    const Total = ()=> {
        if(props.Count.map(el=>el.Qtn*el.Prix).reduce((a,b)=>a+b,0)===0){
            setFrais(0)
        }
        else {
            setFrais(props.Count.map(el=>el.Qtn*el.Prix).reduce((a,b)=>a+b,0)<50?props.Count.map(el=>el.Qtn*el.Prix).reduce((a,b)=>a+b,0)+7:props.Count.map(el=>el.Qtn*el.Prix).reduce((a,b)=>a+b,0))
        }
    }
    return ( 
    <div>
        {props.Count.length === 0 ? 
        <div className="Panier-vide">
            <img  className="Image-panier-vide" src={Vide} alt=""/>
            <h4> Votre panier est vide</h4>
        </div> : 
        <div>
            <div className="panier-détails">
                <h5>Article</h5>
                <h5 className="Prix-détails">Prix</h5>
                <h5>Quantité</h5>
                <h5>Sous Total</h5>
            </div>
            {props.Count.map(el=>
            <div className="panier-produits-container">
                <div className="Article-panier">
                    <img className="panier-image" src={el.Image} alt=""/>
                    <p className="Qtn-Prix">{el.Qtn}*{el.Name}</p>
                </div>
                <div className="Prix-panier">
                    <p>{el.Prix}.00 TND</p>
                </div>
                <div className="Quantité-panier">
                    <div className="Inc-Dec">
                        <p onClick={()=>props.Decrement(el.id)}><i className="fas fa-minus"></i></p>
                        <p className="Qtn-inc-dec">{el.Qtn}</p>
                        <p onClick={()=>props.Increment(el.id)} ><i className="fas fa-plus"></i></p>
                    </div>
                </div>
                <div className="Sous-total">
                    <p>{el.Qtn*el.Prix}.00 TND</p>
                </div>
                <i onClick={()=>props.Remove(el.id)} class="fas fa-trash-alt"></i>
            </div>
            )}
        <div className="Total">
            <p className="Livraison"> <strong> Livraison : </strong> {props.Count.map(el=>el.Qtn*el.Prix).reduce((a,b)=>a+b,0)>50?"Livraison gratuite":"7 TND"}</p>
            <p> <strong> Total :  </strong>{Frais}.00 TND</p>
        </div>
        </div>
        
        
          }  
    </div> );
}
 
export default Panier;