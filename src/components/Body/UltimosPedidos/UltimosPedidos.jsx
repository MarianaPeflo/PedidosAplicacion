import React from 'react';
import DropBotton from './DropBotton';
import BotonBuscar from './BotonBuscar';
import Result from './Result';

const UltimosPedidos=()=>{
    return(
        <>
            <h2>Ultimos pedidos</h2>
            <DropBotton/>
            <BotonBuscar onClickSearch={()=>console.log("Buscar persona")}/>
            <Result/>
        </>
    )
}
export default UltimosPedidos;