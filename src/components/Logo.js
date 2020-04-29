import React from "react";

const Logo = (config) => {
    let varl = 0;
    return(
        <div>
            <img src={'img/logo.png'} className={'logo'}/>
            {config.systemName}
        </div>
    )
}
export default Logo;