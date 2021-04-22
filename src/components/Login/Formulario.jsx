import React from 'react';

const Formulario=()=>{
    return(
        <>
            <h2>Login</h2>
            <input type="text" name="usuario" id="usuario" placeholder="Usuario"/>
            <br/>
            <input type="password" name="password" id="password" placeholder="Contraseña"/>
        </>
    );
}
export default Formulario;