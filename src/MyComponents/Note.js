import React from 'react'

export const Note = ({notes, onDelete}) => {
    return (
        <div>
            <h3>{notes.title}</h3>
            <p>{notes.desc}</p>
            <button className="btn btn-danger btn-sm m-3" onClick={() =>{onDelete(notes)}}>Delete</button>
            <hr />
        </div>
    )
}
