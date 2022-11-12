import React from "react";
import  "../css/button.css"

function Button ({texto, esClic, manejaClic}){
    return (
        <button className={esClic ? "button-clic" : "button-reset"} onClick={manejaClic}>
            {texto}
        </button>
    )
} 
export default Button;