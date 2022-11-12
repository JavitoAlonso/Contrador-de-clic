import './App.css';
import logo from './images/logo.png'
import Button from './components/button';
import Count from './components/count';
import {useState} from "react"

function App() {
  const [numClic, setNumClic] = useState(0);

  const Clic = () => {
    setNumClic(numClic + 1);

  }

  const reiniciarContador = () => {
    setNumClic(0)
  }
  return (
    <div className='App'>
      <div className='logoContainer'>
        <img className='logo' src={logo} alt='Logo'/>
      </div>  
      <div className='container'>
        <Count nClic={numClic} />
        <Button 
        texto={"Clic"}
        esClic={true}
          manejaClic={Clic}
        />
        <Button 
          texto={"Reiniciar"}
          esClic={false}
          manejaClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
