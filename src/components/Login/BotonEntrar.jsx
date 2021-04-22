import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const BotonEntrar=({onClickLogin,onClickCreate})=>{
    return(
        <>
        <Button text="Login" onClickHandler={onClickLogin}/>
        
        <Button text="Crea una cuenta" onClickHandler={onClickCreate}/>
        </>
    );
}
BotonEntrar.propTypes={
    onClickLogin:PropTypes.func.isRequired,
}
export default BotonEntrar;