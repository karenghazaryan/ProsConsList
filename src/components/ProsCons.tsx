import React from "react";
import Divider from "./Divider";
import ListContainer from "./list/ListContainer";

function ProsCons() {
    return(
        <div className="pros-cons-container">
            <ListContainer title="Pros"/>
            <Divider direction="vertical"/>
            <ListContainer title="Cons"/>
        </div>
    )
}

export default ProsCons;