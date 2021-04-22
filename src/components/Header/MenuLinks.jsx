import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const MenuLinks=({onClickHome,onClickAdd,onClickIn,reference})=>{
    return(
    <>
    <Button text="Inicio" onClickHandler={onClickHome}/>
    <Button text="Agregar Cliente" onClickHandler={onClickAdd}/>
    <Button text="Login" onClickHandler={onClickIn}/>
    </>
    )
}
MenuLinks.propTypes={
    onClickHome:PropTypes.func.isRequired,
    onClickAdd:PropTypes.func.isRequired,
    onClickIn:PropTypes.func.isRequired,
}
export default MenuLinks;