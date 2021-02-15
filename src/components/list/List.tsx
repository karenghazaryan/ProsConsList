import React, {useCallback, useEffect, useState} from "react";
import ListItem from "./ListItem";

type Item = {
    id: number,
    text: string,
    editing: boolean
}

const initialItems:Item[] = []

function List() {
    const [items, setItems] = useState(initialItems)

    const onEdit = useCallback((id:number, text:string) => {
        let newItems = items.map((item)=>{
            if (item.id === id) {
                return {
                    ...item,
                    text: text,
                    editing: false
                };
            }
            return item;
        })
        setItems([...newItems]);
    }, [items])

    const onAdd = useCallback((text:string) => {
        let newItems = [...items, {id: (new Date()).getTime(), text: text, editing: true}]
        setItems([...newItems]);
    }, [items])

    const onRemove = useCallback((id:number) => {
        const index = items.findIndex((item) => item.id === id);
        items.splice(index, 1)
        setItems([...items]);
    }, [items])

    return (
        <div className="list">
            {items.map((value, index) => (
                    <ListItem {...value}  key={index} index={index} onEdit={onEdit} onAdd={onAdd} onRemove={onRemove} />
                )
            )}
            <ListItem editing={false} text='Click to Add new' index={items.length} onAdd={onAdd} onEdit={onEdit} onRemove={onRemove} />
        </div>
    )
}

export default List;