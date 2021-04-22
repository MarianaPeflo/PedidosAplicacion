import React from 'react';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';

const BuscarFecha=({onClickSearchDate})=>{
    return(
        <div className="search2">
            <input type="search" placeholder="Buscar Fecha"/>
            <Button text="Buscar" onClickHandler={onClickSearchDate}/>
        </div>
    )
}
BuscarFecha.propTypes={
    onClickSearchDate:PropTypes.func.isRequired,
}
export default BuscarFecha;