import './Styles/Pedidos.css'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import ManejoTabs from './components/Body/ManejoTabs/ManejoTabs';
import UltimosPedidos from './components/Body/UltimosPedidos/UltimosPedidos'
import PedidosFecha from './components/Body/PedidosFecha/PedidosFecha';

function App() {
  return (
    <main>
      <header className="menu">
        
      <Header/>
      </header>
      <ManejoTabs/>
      {/* <UltimosPedidos/> */}
      {/* <PedidosFecha/> */}
      {/* <Login/> */}
    </main>
  );
}

export default App;
