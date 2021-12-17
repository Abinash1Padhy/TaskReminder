import React from 'react'
import { ImCross } from 'react-icons/im'

const Task = ({ task , onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.id} . {task.text} 
            <ImCross 
            style={{ color:'red', cursor:'pointer' }} 
            onClick={ () => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
