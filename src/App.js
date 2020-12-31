import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
import './App.css';
import axios from "axios";
import AutoGrid from "./components/AutoGrid";


const App = () => {

  const [trago, setTragos] = useState("");
  const [tragosArray, setTragosArray] = useState([]);
  const [options, setOptions] = useState([]);
  

  /*useEffect( () => {
    obtenerTrago();
  }, []);

  const obtenerTrago = async() => {
    
    //array de autocompletado
    try{

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' ;
      const res = await axios.get(url);
      const listaTragos = res.data.results;

      setOptions(listaTragos.map((nombreTrago)=> nombreTrago.name));

    } catch(error) {
        console.log(error);
    }
  }*/

 // realizar una lista de tragos para casamiento, cumpleaños o eventos 
// crea un array que luego muestra en una tabla
  const getTragos = async () => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${trago}` ;
      const res = await axios.get(url);
      

      const tragoObjeto = {
        name: res.data.drinks.strDrink,
      };
      console.log(res);

      setTragosArray([...tragosArray, tragoObjeto]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setTragos(e.target.value.toLowerCase());
    //console.log(e.target.value.toLowerCase());  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(res.data.name);
    getTragos();
  };


  return (
    <div className="App">
      <AutoGrid/>
      <form onSubmit={handleSubmit}>
         
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
