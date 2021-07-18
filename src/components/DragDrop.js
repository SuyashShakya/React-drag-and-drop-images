import React, {useState} from 'react';
import {Box} from '@material-ui/core';
import { useDrop } from 'react-dnd';
import Picture from './picture';

const PictureList = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }, 
    {
        id: 2,
        url: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        id: 3,
        url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
]

const DragDrop = () => {
    const [board, setBoard] = useState([])
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    
    const addImageToBoard = (id) => {
        const pictures = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictures[0]])
    }

    return (
        <Box margin='0 auto'>
            <Box margin={5}>
                {PictureList.map((item) => {
                    return <Picture url={item.url} id={item.id}/>
                })}
            </Box>
            <Box 
                ref={drop} 
                margin={5} 
                width={500} 
                height={500} 
                boxShadow={3}
            >
                {board.map((item) => {
                    return (
                        <Picture url={item.url} id={item.id}/>
                    )
                })}
            </Box>
        </Box>
    )
}

export default DragDrop;      