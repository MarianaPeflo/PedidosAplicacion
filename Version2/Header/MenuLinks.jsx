import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const MenuLinks=({onClickIn})=>{
    return(
    <>
    <Button type="menubutton" text="Login" onClickHandler={onClickIn}/>
    </>
    )
}
MenuLinks.propTypes={
    onClickIn:PropTypes.func.isRequired,
}
export default MenuLinks;