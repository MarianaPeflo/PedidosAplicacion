import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Pedidos=({onClickHome})=>{
    return(
    <>
    <Button type="inicio" text="Inicio" onClickHandler={onClickHome}/>
    {/* <Button text="Agregar Cliente" onClickHandler={onClickAdd}/> */}
    
    </>
    )
}
Pedidos.propTypes={
    onClickHome:PropTypes.func.isRequired,
}
export default Pedidos;