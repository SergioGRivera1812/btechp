import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import './controlR.css'; // Importa tu archivo CSS personalizado si es necesario
import { Container, Navbar } from 'react-bootstrap';

const App = () => {
  return (
    
    <div className="dashboard">
      <div className="containers">
        <h2>Monitoreo en vivo</h2>
        <div id="lecturas">
          <h2>Humedad</h2>
          <div className="circle">50%</div>
          <div className="circle">20%</div>
          <div className="circle">40%</div>
        </div>
        <br /><br /><br />
        <div id="lecturas">
          <h2>Capacidad</h2>
          <div className="circle2">50%</div>
          <div className="circle2">20%</div>
          <div className="circle2">40%</div>
        </div>
      </div>
      <br /><br /><br />
      <div className="recetario">
        <button className="receta1 ">Formula 1</button>
        <button className="receta2 ">Formula 2</button>
        <button className="receta3 ">Formula 3</button>
      </div>
    </div>
  );
};

export default App;
