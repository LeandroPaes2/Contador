import './App.css';
import useAcao from './CONTADOR.js';

function App() {
  const { contador, aumentar, diminuir } = useAcao();
  return (
    <body>
    <div class="quadrado">

    <p style={{fontSize:'40px', position:'absolute', margin:'-40px auto'}}>{contador}</p>

    <button style={{margin:'125px 0px 0px -184px'}} onClick={aumentar}>+</button>

    <button style={{margin:'125px 0px 0px 0px'}} onClick={diminuir}>-</button>  
    </div>
    </body>
  );
}

export default App;
