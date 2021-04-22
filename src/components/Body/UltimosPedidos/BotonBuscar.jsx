import React from 'react';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';

const BotonBuscar=({onClickSearch})=>{
    return(
        <div className="search">
            <input type="search" placeholder="Buscar persona"/>
            <Button text="Buscar" onClickHandler={onClickSearch}/>
        </div>
    )
}
BotonBuscar.propTypes={
    onClickSearch:PropTypes.func.isRequired,
}
export default BotonBuscar;