import React from 'react';
import BuscarFecha from './BuscarFecha';
import Result from '../UltimosPedidos/Result';

const PedidosFecha=()=>{
    return(
        <>
        <h2>Pedidos por fecha</h2>
        <BuscarFecha onClickSearchDate={()=>console.log("Fecha")}/>
        <Result/>
        </>
    )
}
export default PedidosFecha;