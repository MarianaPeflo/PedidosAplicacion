import React from 'react';
import Proptypes from 'prop-types';
import './Button.css';

const Button=({text,onClickHandler,type})=>{
    return(
        <button className={type} onClick={()=>{
            console.log("Has presionado un boton");
            onClickHandler(text);
        }}>
            <span>
                {text}
            </span>
        </button>
    );
}
Button.propTypes={
    onClickHandler: Proptypes.func.isRequired,
    text:Proptypes.string.isRequired,
}
export default Button;