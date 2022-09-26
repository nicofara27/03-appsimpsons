import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";

function App() {
  return (
    <section className="container">
      <article >
        <img className="w-100" src={require("./img/titulo.png")} alt="" />
      </article>
      <article className="text-center">
      <Button variant="warning">Obtener frase</Button>
      </article>
      <Frase></Frase>
    </section>
  );
}

export default App;
