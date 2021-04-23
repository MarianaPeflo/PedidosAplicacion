import React from 'react';
import Button from '../Button/Button';

const ConsultarCliente=({onClickSelect})=>{
    return(
    <>
    <Button type="selectclient" text="Consultar Cliente" onClickHandler={onClickSelect}/>
    </>
    )
}
export default ConsultarCliente;