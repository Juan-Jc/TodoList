import React from "react";
import jotaceLogo from '../imagenes/logo-jc-white.png';
import '../hojas-de-estilo/Logo.css'
function Logo () {
    return(
        <div className='jotace-logo-contenedor'>
        <img
        src={jotaceLogo}
        className='jotace-logo'
        />
      </div>
    )
}

export default Logo;