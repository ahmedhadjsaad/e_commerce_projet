import React from 'react'
const BébéetMaman = (props) => {
    return ( 
    <div className="Produit-Container">
        {props.Produits.filter(el=>el.Catégorie==="Bébé&Maman").map(el=>
            <div className="Produit" >
                <img className="produit-image" src={el.Image} alt=""/>
                <p className="produit-name">{el.Name}</p>
                <div>
                    <p className="produit-prix">{el.Prix}.00 TND</p>
                </div>
                <p onClick={()=>props.NombreProduit(...props.Produits.filter(x=>x.id==el.id))} className="button-panier">Ajouter au panier</p>

            </div>
            )}
    </div> );
}
 
export default BébéetMaman;