import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    //Esta funcion solo se ejecuta en el montaje 
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      //Aqui hago la peticion o request
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      const dato = await respuesta.json();
      //Guardar la frase del personaje en el state
      setPersonaje(dato[0]);

    } catch (error) {
      //Muestra un msj de error en el caso de que exista
      console.log(error);
    }
  }

  return (
    <section className="container">
      <article >
        <img className="w-100" src={require("./img/titulo.png")} alt="" />
      </article>
      <article className="text-center">
      <Button variant="warning">Obtener frase</Button>
      </article>
      <Frase personaje={personaje}></Frase>
    </section>
  );
}

export default App;
