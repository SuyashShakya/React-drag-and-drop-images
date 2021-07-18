import React from 'react';
import { useDrag } from 'react-dnd';

const Picture = ({url, id}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'image',
        item: {id : id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <img
            ref={drag} 
            src={url} 
            width={150} 
            height={150} 
            style={{margin: 5, border: isDragging ? '5px solid blue' : '0px'}}
            alt='' 
        />
    )
}

export default Picture;