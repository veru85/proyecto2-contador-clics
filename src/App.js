import './App.css';
import Boton from './componentes/Boton';

function App() {

  const manejarClic =()=> {
    console.log("clic")
  }

  const reiniciarContador =()=>{
    console.log("reiniciar");
  }

  return (
    <div className='App'>
      <div className='title'>
        <h2>Mi primer App con React</h2> 
        </div>  
      <div className='contenedor-contador'>
        <Boton
        texto='Clic'
        esBotonClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto='Reiniciar'
        esBotonClic={false}
        manejarClic={reiniciarContador}/>


      </div>
    </div>
  );
}

export default App;
