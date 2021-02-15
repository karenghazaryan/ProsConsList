import React from "react";
import Divider from "../Divider";
import List from "./List";

interface ListContainerProps {
    title?:string
}

function ListContainer(props:ListContainerProps) {
    let {title} = props;
    return (
        <div className="list-container">
            <span className="title-container">{title}</span>
            <Divider direction="horizontal"/>
            <List/>
        </div>
    )
}

export default ListContainer;