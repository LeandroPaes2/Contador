import './App.css';

let contador = 0;
function App() {
  
  const atualizarContador = () => {
    document.getElementById('contador').innerText = contador;
  };

  const mais = () => {
      contador += 1;
      atualizarContador();
  };

  const menos = () => {
      contador -= 1;
      atualizarContador();
  };

  return (
    
    

    <body>
    <div class="quadrado">

    <p id="contador" style={{fontSize:'40px', position:'absolute', margin:'-40px auto'}}>{contador}</p>

    <button onClick={mais} style={{margin:'125px 0px 0px -184px'}}>+</button>

    <button onClick={menos} style={{margin:'125px 0px 0px 0px'}}>-</button>  
    </div>
    </body>
  );
}

export default App;
