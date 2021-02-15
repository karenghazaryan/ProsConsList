import React, {useCallback, useEffect, useRef, useState} from "react";
type ItemProps = {
    id?: number,
    text: string,
    index: number,
    editing: boolean,
    onEdit: Function,
    onAdd: Function,
    onRemove: Function
}

function ListItem(props: ItemProps) {
    const {id, text, index, onEdit, onAdd, onRemove, editing} = props;
    const itemIndex = index + 1;

    let [isEditing, setIsEditing] = useState(editing);
    const inputEl = useRef(null);

    const changeToInput = useCallback(() => {
        setIsEditing(true);
    }, [isEditing])

    const onInput = () => {
        if(!id) {
            onAdd((inputEl.current as any)?.value);
            setIsEditing(false);
        }

        if(!(inputEl.current as any)?.value && id) {
            setIsEditing(false);
            onRemove(id);
        }
    }
    const handleClickOutside = (e: any) => {
        if (inputEl.current && !(inputEl.current as any)?.contains(e.target)) {
            onEdit(...[id, (inputEl.current as any)?.value])
            setIsEditing(false);
        }
    }

    const handleEnter = (e: any) => {
        if(e.keyCode === 13 && inputEl.current){
            onEdit(...[id, (inputEl.current as any)?.value])
            setIsEditing(false);
        }
    }

    useEffect(() => {
        (inputEl.current as any)?.focus()
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEnter);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEnter);

        }
    })

    return (
        <div className="list-item-container">
            <span className='list-item-index'>{itemIndex}. </span>
            <span className='list-item-text'>
            {isEditing ?
                <input ref={inputEl} defaultValue={id ? text: ''} onChange={onInput}/>
                :
                <span  onClick={changeToInput}>{text}</span>
            }
            </span>
        </div>
    )
}

export default ListItem;