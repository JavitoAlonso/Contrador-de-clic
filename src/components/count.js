import React from "react";
import "../css/count.css"

function Count ({nClic}){
    return (
        <div className="count">
             {nClic}   
        </div>
    )
}
export default Count;