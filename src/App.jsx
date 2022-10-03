import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    //Esta funcion solo se ejecuta en el montaje
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      setMostrarSpinner(true)
      //Aqui hago la peticion o request
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      //Guardar la frase del personaje en el state
      setPersonaje(dato[0]);
      //Cambiar el valor de mostrarSpinner para que se vea el componente Frase
      setMostrarSpinner(false);
    } catch (error) {
      //Muestra un msj de error en el caso de que exista
      console.log(error);
    }
  };

  //Cargar un componente condicional
  const componenteCondicional = mostrarSpinner ? (
    <Spinner></Spinner>
  ) : (
    <Frase personaje={personaje}></Frase>
  );

  return (
    <Container>
      <article className="text-center">
        <img className="w-50" src={require("./img/titulo.png")} alt="" />
      </article>
      <article className="text-center">
        <Button variant="warning" onClick={consultarApi}>
          Obtener frase
        </Button>
      </article>
      {componenteCondicional}
    </Container>
  );
}

export default App;
