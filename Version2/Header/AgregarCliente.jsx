import React from 'react';
import Button from '../Button/Button';

const AgregarCliente=({onClickAdd})=>{
    return(
    <>
    <Button type="addclient" text="Agregar Cliente" onClickHandler={onClickAdd}/>   
    </>
    )
}
export default AgregarCliente;