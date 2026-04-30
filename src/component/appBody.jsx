import React from "react";
import transactions from "./transations";
import topexpeses from './topexpenses'

const AppBody = () => {
    return (
        <div className="appbody">
            <transactions />
            <topexpeses />
        </div>  
    )
}

export default AppBody 
