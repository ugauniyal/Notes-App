import React from 'react'
import { Note } from "./Note";

export const Notes = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "6%",
    }
    return (
        <div className='container' style={myStyle}>
            <h1>Notes</h1>
            <br />
            <br />
            {props.notes.length === 0 ? "No notes to display" :
            props.notes.map((note) =>{
                return <Note notes={note} key={note.sno} onDelete = {props.onDelete}/>
            })}
        </div>
    )
}
