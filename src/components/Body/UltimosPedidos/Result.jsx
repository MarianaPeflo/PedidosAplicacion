import React from 'react';
import Button from '../../Button/Button';

const Result=()=>{
    return(
        // <textarea name="" id="" cols="90" rows="10" className="result" disabled="false">
        // </textarea>
        <div className="result">
            <h6>Fecha de Pedido</h6>
            <p className="nameclient">Nombre cliente</p>
            <p className="desc">Descripcion Pedido</p>
            <Button text="Mas detalles" onClickHandler={()=>console.log("Mas detalles")}/>
            <hr/>
        </div>
    )
}
export default Result;