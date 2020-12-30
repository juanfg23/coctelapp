import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
import './App.css';
import axios from "axios";
import AutoGrid from "./components/AutoGrid";


const App = () => {

  const [tragos, setTragos] = useState("");
  const [tragosArray, setTragosArray] = useState([]);
  const [options, setOptions] = useState([]);
  

  useEffect( () => {
    obtenerTrago();
  }, []);

  const obtenerTrago = async() => {

    try{

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' ;
      const res = await axios.get(url);
      const listaTragos = res.data.results;
      const nombres = listaTragos.map((tragos)=> tragos.name);

      setOptions(listaTragos.map((tragos)=> tragos.name));

    } catch(error) {
        console.log(error);
    }
  }

  const getTragos = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' ;
      const res = await axios.get(url);
      

      const tragoObjeto = {
        id: res.data.id,
      };
      //console.log(res.data.name)

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
    //console.log("hola");
    getTragos();
  };


  return (
    <div className="App">
      <AutoGrid/>
    </div>
  );
}

export default App;
