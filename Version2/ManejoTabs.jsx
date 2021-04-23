import {useState} from 'react';
import Button from '../../Button/Button';
import UltimosPedidos from '../UltimosPedidos/UltimosPedidos';
import PedidosFecha from '../PedidosFecha/PedidosFecha';
import MenuLinks from '../../Header/MenuLinks';
import Login from '../../Login/Login';
import Pedidos from '../../Header/Pedidos';
import AgregarCliente from '../../Header/AgregarCliente';
import ConsultaCliente from '../../Header/ConsultaCliente';
import ButonDetails from '../UltimosPedidos/ButonDetails';

const ManejoTabs=()=>{

    const [toggleState,setToggleState]=useState(1);
  
    const toggleTab=(index)=>{
      setToggleState(index);
    }
    return(
        <>
         <div className="">
        <div className="container">
        {/* <div className={toggleState===1 || toggleState===2 || toggleState===3?"bloc-tabs":"menuboton"}> */}
            <div className="bloc-tabs">
                <Button type={toggleState === 1  ? "tabs active-tabs":"tabs"}  text="Nuevo Pedido" onClickHandler={newOrder=>{
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
            </div>   
            {/* </div> */}
            
            <div className="menuboton">
            <MenuLinks onClickIn={login=>{
                    toggleTab(4)
                    console.log("Presionaste: ",login);
             } }/>
             <Pedidos onClickHome={Inicio=>{
                    toggleTab(1)
                    console.log("Presionaste: ",Inicio);
             } }/>
             <AgregarCliente onClickAdd={addButton=>{
                    toggleTab(5)
                    console.log("Presionaste: ",addButton);
             } }/>
             <ConsultaCliente onClickSelect={select=>{
                    toggleTab(6)
                    console.log("Presionaste: ",select);
             } }/>
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
                    <ButonDetails onClickDetails={details=>{
                    toggleTab(7);console.log("Presionaste ",details)
        }}/>
            </div>
            <div className={toggleState===3?"content active-content":"content"}>
                    <hr/>
                   <PedidosFecha/>
                   <ButonDetails onClickDetails={details=>{
                   toggleTab(8); console.log("Presionaste ",details)
        }}/>
            </div>
            <div className={toggleState===4?"content active-content":"content"}>
                   <Login/>
            </div>
            <div className={toggleState===5?"content active-content":"content"}>
                 <AgregarCliente/>
            </div>
            <div className={toggleState===6?"content active-content":"content"}>
                 <ConsultaCliente/>
            </div>
            <div className={toggleState===7?"content active-content":"content"}>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero esse tenetur voluptates adipisci quo eius alias aliquid culpa fugit voluptatum vitae, est, tempora quibusdam ex atque, dolorem eos saepe totam.</p>
            </div>
            <div className={toggleState===8?"content active-content":"content"}>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero esse tenetur voluptates adipisci quo eius alias aliquid culpa fugit voluptatum vitae, est, tempora quibusdam ex atque, dolorem eos saepe totam.</p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default ManejoTabs;