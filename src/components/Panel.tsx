import React from "react";

type PanelProps = {
    title:string
}
function Panel(props: PanelProps) {
    let {title} = props;

    return (
        <div className="panel-container">
            <span className="panel-title"> {title} </span>
        </div>
    )
}

export default Panel;