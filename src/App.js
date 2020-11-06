import React , {useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import data from './data.json'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Materiels from './Components/Main/Materiels';
import Santé from './Components/Main/Santé';
import BébéetMaman from './Components/Main/BébéetMaman';
import Panier from './Components/Main/Panier';
// import Caroussel from './Components/Header/Caroussel';
import SearchResult from './Components/Main/SearchResult';
import Login from './Components/Main/Login';
import Enregistrer from './Components/Main/Enregistrer';
import Chaussures from './Components/Main/Chaussures';
import Footer from './Components/Footer/Footer';
import Axios from 'axios'




function App() {

const [Keyword, setKeyword] = useState("")

const Search = (x) => {
  setKeyword(x)
}

const [Produits, setProduits] = useState([])
useEffect(() => {
  Axios.get("http://localhost:4000/Products").then(res=>setProduits(res.data))
}, [])
const [Count, setCount] = useState([])

const NombreProduit=(x)=>{
  const elementsIndex = Count.findIndex(element => element.id == x.id)
  if(elementsIndex===-1){
    setCount([...Count,x])
  }
  else {
    let newArray={...Count[elementsIndex],Qtn:Count[elementsIndex].Qtn+1}
    setCount([...Count.filter(element=>element.id!==x.id),newArray])
  }
}

const Increment = (id) => {
  const elementsIndex = Count.findIndex(element => element.id == id)
  let newArray = [...Count]
  newArray[elementsIndex] = { ...newArray[elementsIndex], Qtn: +newArray[elementsIndex].Qtn + 1 }
  setCount(newArray)
}

const Decrement = (id) => {
  if (Count.filter(el => el.id == id)[0].Qtn != 1) {
    const elementsIndex = Count.findIndex(element => element.id == id)
    let newArray = [...Count]
    newArray[elementsIndex] = { ...newArray[elementsIndex], Qtn: +newArray[elementsIndex].Qtn - 1 }
    setCount(newArray)
  }
}

const Remove = (id) => {
  setCount([...Count.filter(el=>el.id!=id)])
}

  return (
    <Router>
      <div className="App">
        <Header Count={Count} Search={Search}/>

        <Route path="/SearchResult" component={()=> <SearchResult Produits={Produits} NombreProduit={NombreProduit} Keyword={Keyword}/> }/>

        {/* <Route exact path="/" component={()=> <Caroussel/>}/> */}

        <Route exact path="/" component={()=><Main Produits={Produits} NombreProduit={NombreProduit} />}/>

        <Route path="/Login" component={()=> <Login/>}/>

        <Route path="/Enregistrer" component={()=> <Enregistrer/> }/>

        <Route exat path="/Panier" component={()=><Panier Count={Count} Increment={Increment} Decrement={Decrement} Remove={Remove} />}/>

        <Route exact path="/MaterielMedical" component={()=><Materiels Produits={Produits} NombreProduit={NombreProduit} Keyword={Keyword} />}/>

        <Route exact path="/Santé" component={()=><Santé Produits={Produits} NombreProduit={NombreProduit} />}/>

        <Route exact path="/BébéetMaman" component={()=><BébéetMaman Produits={Produits} NombreProduit={NombreProduit}  />}/>

        <Route path="/Chaussures" component={()=> <Chaussures Produits={Produits} NombreProduit={NombreProduit}/> }/>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
