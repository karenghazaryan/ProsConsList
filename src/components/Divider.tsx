import React from "react";

type DividerProps = {
    direction: string
}

function Divider(props: DividerProps) {
    let {direction} = props;
    return (
        <div className={`divider ${direction}`}/>
    )
}

export default React.memo(Divider);