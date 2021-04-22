import {useState} from 'react';
import Button from '../../Button/Button';
import UltimosPedidos from '../UltimosPedidos/UltimosPedidos';
import PedidosFecha from '../PedidosFecha/PedidosFecha';
import MenuLinks from '../../Header/MenuLinks';
import Login from '../../Login/Login';

const ManejoTabs=()=>{

    const [toggleState,setToggleState]=useState(1);

    const toggleTab=(index)=>{
      setToggleState(index);
    }
    return(
        <>
         <div className="">
        <div className="container">
            <div className="bloc-tabs">
                <Button type={toggleState === 1 ? "tabs active-tabs":"tabs"} text="Nuevo Pedido" onClickHandler={newOrder=>{
                    toggleTab(1)
                    console.log("Presionaste: ",newOrder);
                }}/>
                <Button type={toggleState === 2 ? "tabs active-tabs":"tabs"} text="Ultimos Pedidos" onClickHandler={lastOrder=>{
                    toggleTab(2)
                    console.log("Presionaste: ",lastOrder);
                }}/>
                <Button type={toggleState === 3 ? "tabs active-tabs":"tabs"} text="Pedidos por fecha" onClickHandler={dateOrder=>{
                    toggleTab(3)
                    console.log("Presionaste: ",dateOrder);
                }}/>
                 <Button type={toggleState === 4 ? "tabs active-tabs":"tabs"} text="Login" onClickHandler={login=>{
                    toggleTab(4)
                    console.log("Presionaste: ",login);
                }}/>
            </div>
            <div className="content-orders">
            <div className="content-tabs">
                <div className={toggleState===1?"content active-content":"content"}>
                    <h2>Nuevo Pedido</h2>
                    <hr/>
                    
                </div>
            </div>
            <div className={toggleState===2?"content active-content":"content"}>
                    <hr/>
                    <UltimosPedidos/>
            </div>
            <div className={toggleState===3?"content active-content":"content"}>
                    <hr/>
                   <PedidosFecha/>
            </div>
            <div className={toggleState===4?"content active-content":"content"}>

                   <Login/>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default ManejoTabs;