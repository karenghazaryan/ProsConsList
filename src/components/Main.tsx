import React from 'react';
import Panel from "./Panel"
import ProsCons from "./ProsCons";

function Main() {
    return (
        <div className="main-container">
            <Panel title="Summary of pros and cons of React JS"/>
            <ProsCons/>
        </div>
    )
}

export default Main;

