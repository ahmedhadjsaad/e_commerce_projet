import React , {useState} from 'react'
import Santé from '../../sant3.png'
import Bébé from '../../bébe.png'
import Soin from '../../Capture1.png'
import Chaussures from '../../Capture2.png'
import ImageMateriel from '../../maeriel.png'
import { withRouter } from 'react-router-dom'


const Main = (props) => {
    const [More, setMore] = useState(34)
    const [MoreV, setMoreV] = useState(25)
    return ( 
    <div>
        <div className="Img-box">
            <div className="Image-Main-Container">
                <div className="rom">
                    <div className="Image-Main">
                       <div id="zoom-in">
                           <figure>
                               <img onClick={()=>props.history.push("/MaterielMedical")} src={ImageMateriel} alt=""/>
                           </figure>
                       </div>
                    </div>
                </div>
                <div className="rom">
                    <div className="Image-Main">
                       <div id="zoom-in">
                           <figure>
                               <img onClick={()=>props.history.push("/Santé")} src={Santé} alt=""/>
                           </figure>
                       </div>
                    </div>
                </div>
                <div className="rom">
                    <div className="Image-Main">
                       <div id="zoom-in">
                           <figure>
                               <img onClick={()=>props.history.push("/BébéetMaman")} src={Bébé} alt=""/>
                           </figure>
                       </div>
                    </div>
                </div>
                <div className="rom">
                    <div className="Image-Main">
                       <div id="zoom-in">
                           <figure>
                               <img onClick={()=>props.history.push("/Soin")} src={Soin} alt=""/>
                           </figure>
                       </div>
                    </div>
                </div>
                <div className="rom">
                    <div className="Image-Main">
                       <div id="zoom-in">
                           <figure>
                               <img onClick={()=>props.history.push("/Chaussures")} src={Chaussures} alt=""/>
                           </figure>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Border-visage">
            <h1 className="Visage">Visage</h1>
        </div>
        <div className="Visage-container">
            <div className="ul-container">
                <ul className="ul-produits">
                    <li className="li-produit">Nettoyant & Démaquillant</li>
                    <li className="li-produit">Soin Anti-Âge</li>
                    <li className="li-produit">Hydratation Et Nutrition</li>
                    <li className="li-produit">Anti-Tache , Dépigmentant</li>
                    <li className="li-produit">Yeux</li>
                    <li className="li-produit">Lèvres</li>
                    <li className="li-produit">Cicatrices</li>
                </ul>
            </div>
            <div className="image-visage-container">
                <img className="Image-visage" src="https://parapharmacieplus.tn/modules/poslistcateproduct/images/158d70f1d5e08f3caa69186d8b14b9f43d243585_visage_categ.jpg" alt=""/>
            </div>
            <i onClick={()=>{
                if(MoreV===props.Produits.length){
                    setMoreV(MoreV)
                }
                 else if(MoreV==28){
                    setMoreV(MoreV - 3)
                }
            }} class="fas fa-angle-double-left"></i>
            <div className="Produit-visage-Container">
                {props.Produits.slice(MoreV,MoreV+6).filter(el=>el.Catégorie==="Visage").map(el=>
                    <div className="Produit-visage" >
                        <img className="produit-visage-image" src={el.Image} alt=""/>
                        <p className="produit-visage-name">{el.Name}</p>
                        <div>
                            <p className="produit-visage-prix">{el.Prix}.00 TND</p>
                        </div>
                        <p onClick={()=>props.NombreProduit(...props.Produits.filter(x=>x.id==el.id))} className="button-visage-panier">Ajouter au panier</p>
                    </div>
                )}
            </div>
            <i onClick={()=>{
                if(MoreV===props.Produits.length){
                    setMoreV(MoreV)
                }
                 else if(MoreV<28){
                    setMoreV(MoreV + 3)
                }
                
            }} class="fas fa-angle-double-right"></i>
        </div>
        <div className="Border-visage">
            <h1 className="Visage">Solaire</h1>
        </div>
        <div className="Visage-container">
            <div className="ul-container">
                <ul>
                <li className="li-produit">Autobronzant</li>
                <li className="li-produit">Après-solaire</li>
                <li className="li-produit">Protection solaire enfant</li>
                <li className="li-produit">Maquillage solaire</li>
                <li className="li-produit">Protection solaire lèvres</li>
                <li className="li-produit">Indice solaire fort 40 à 50+</li>
                <li className="li-produit">Indice solaire faible SPF15</li>
                <li className="li-produit">Indice solaire moyen 20 à 30</li>
                </ul>
            </div>
        <div className="image-visage-container">
            <img className="Image-visage" src="https://www.publicdomainpictures.net/pictures/230000/nahled/sunscreen.jpg" alt=""/>
        </div>
        <i onClick={()=>{
                if(More===props.Produits.length){
                    setMore(More)
                }
                 else if(More==37){
                    setMore(More - 3)
                }
            }} class="fas fa-angle-double-left"></i>
        <div className="Produit-visage-Container">
            
            {props.Produits.slice(More,More+6).filter(el=>el.Catégorie==="Solaire").map(el=>
                <div className="Produit-visage" >
                    <img className="produit-visage-image" src={el.Image} alt=""/>
                    <p className="produit-visage-name">{el.Name}</p>
                    <div>
                        <p className="produit-visage-prix">{el.Prix}.00 TND</p>
                    </div>
                    <p onClick={()=>props.NombreProduit(...props.Produits.filter(x=>x.id==el.id))} className="button-visage-panier">Ajouter au panier</p>
                </div>
            )}
            
        </div>
        <i onClick={()=>{
                if(More===props.Produits.length){
                    setMore(More)
                }
                 else if(More<37){
                    setMore(More + 3)
                }
                
            }} class="fas fa-angle-double-right"></i>
        </div>

        <div className="static-container">
                <div className="col-container">
                    <div className="box-container">
                        <i class="fas fa-people-carry"></i>
                    </div>
                    <div className="txt-container">
                        <h6>Livraison Gratuite</h6>
                        <p>Sur tous les achats supérieures à 50.00TND</p>
                    </div>
                </div>
                <div className="col-container">
                    <div className="box-container">
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <div className="txt-container">
                        <h6>Paiement</h6>
                        <p>Paiement à la livraison</p>
                    </div>
                </div>
                <div className="col-container">
                    <div className="box-container">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div className="txt-container">
                        <h6>Support en ligne</h6>
                        <p>7/7 de 8h à 20h30</p>
                    </div>
                </div>
                <div className="col-container">
                    <div className="box-container">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <div className="txt-container">
                        <h6>Echange</h6>
                        <p>Gratuits</p>
                    </div>
                </div>
            </div>


        
    </div> );
}
 
export default withRouter (Main);